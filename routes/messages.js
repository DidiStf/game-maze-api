const express = require('express');
const { body, validationResult } = require('express-validator');

const authenticate = require('../middleware/authenticate');
const messageService = require('../services/message');
const userService = require('../services/user');

const router = express.Router();

router.get('/', authenticate, async (req, res) => {
  const { id } = req.user;

  try {
    const messages = await messageService.findByOwnerId(id);
    res.json(messages);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.post(
  '/create',
  [
    authenticate,
    [
      body('content', 'Content is required.').not().isEmpty(),
      body('recipient', 'Recipient is required.').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    const { id } = req.user;
    const { content, recipient, subject } = req.body;

    const recipientUser = await userService.findOneById(recipient);

    if (!recipientUser)
      return res.status(404).json({ message: 'Recipient not found' });

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // In the database we create two copies of the message, one for each owner (sender and recipient)
      // That way owners can delete their copy of the message independantly of each other
      const newMessageSender = {
        content,
        owner: id,
        recipient,
        sender: id,
        subject,
      };

      const newMessageRecipient = {
        content,
        owner: recipient,
        recipient,
        sender: id,
        subject,
      };

      const message = await messageService.saveMessage([
        newMessageSender,
        newMessageRecipient,
      ]);

      res.json(message);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Server Error' });
    }
  }
);

router.delete('/delete', authenticate, async (req, res) => {
  const { id, owner } = req.body;

  // Make sure user owns message
  if (owner.toString() !== req.user.id)
    return res.status(401).json({ message: 'Not authorized' });

  try {
    let message = await messageService.findOneById(id);

    if (!message) return res.status(404).json({ message: 'Message not found' });

    await messageService.removeMessageById(id);

    res.json({ message: 'Message deleted' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
