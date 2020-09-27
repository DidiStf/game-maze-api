const express = require('express');
const { body, validationResult } = require('express-validator');

const authenticate = require('../middleware/authenticate');
const Message = require('../models/Message');

const router = express.Router();

// @route GET api/message/:id
// @desc Get all messages by user id
// @access Private
router.get('/', authenticate, async (req, res) => {
  const { id } = req.user;

  try {
    const messages = await Message.find({ owner: id }).sort({
      createdAt: -1,
    });
    res.json(messages);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

// @route POST api/messages/create
// @desc Add new message
// @access Private
router.post(
  '/create',
  [
    authenticate,
    [
      body('content', 'Content is required.').not().isEmpty(),
      body('recipient', 'Recipient is required.').not().isEmpty(),
      body('sender', 'Sender is required.').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { content, recipient, sender, subject } = req.body;

    try {
      // In the database we create two copies of the message, one for each owner (sender and recipient)
      // That way owners can delete their copy of the message independantly of each other
      const newMessageSender = new Message({
        content,
        owner: sender,
        recipient,
        sender,
        subject,
      });

      const newMessageRecipient = new Message({
        content,
        owner: recipient,
        recipient,
        sender,
        subject,
      });

      const messageSender = await newMessageSender.save();
      await newMessageRecipient.save();

      res.json(messageSender);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ message: 'Server Error' });
    }
  }
);

// @route DELETE api/messages/delete
// @desc Delete message
// @access Private
router.delete('/delete', authenticate, async (req, res) => {
  const { id, owner } = req.body;

  // Make sure user owns message
  if (owner.toString() !== req.user.id)
    return res.status(401).json({ message: 'Not authorized' });

  try {
    let message = await Message.findById(id);

    if (!message) return res.status(404).json({ message: 'Message not found' });

    await Message.findByIdAndRemove(id);

    res.json({ message: 'Message deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
