const express = require('express');
const { body, validationResult } = require('express-validator');

const authenticate = require('../middleware/authenticate');
const UserComment = require('../models/UserComment');

const router = express.Router();

// @route GET api/comments/:id
// @desc Get all comments by game id
// @access Public
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const comments = await UserComment.find({ game: id }).sort({
      createdAt: -1,
    });
    res.json(comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

// @route POST api/comments/create
// @desc Add new comment
// @access Private
router.post(
  '/create',
  [
    authenticate,
    [
      body('author', 'Author is required.').not().isEmpty(),
      body('game', 'Game is required.').not().isEmpty(),
      body('title', 'Title is required.').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { author, content, game, title } = req.body;

    try {
      const newComment = new UserComment({
        author,
        content,
        game,
        title,
      });

      const comment = await newComment.save();

      res.json(comment);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ message: 'Server Error' });
    }
  }
);

// @route PUT api/comments/update
// @desc Update comment
// @access Private
router.put('/update', authenticate, async (req, res) => {
  const { id, author, content, title } = req.body;

  // Make sure user owns comment
  if (author.toString() !== req.user.id)
    return res.status(401).json({ msg: 'Not authorized' });

  try {
    let comment = await UserComment.findById(id);

    if (!comment) return res.status(404).json({ message: 'Comment not found' });

    // Build updated comment object
    const updatedComment = {
      content: content || comment.content,
      title: title || comment.title,
    };

    comment = await UserComment.findByIdAndUpdate(
      id,
      { $set: updatedComment },
      { new: true }
    );

    res.json(comment);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

// @route DELETE api/comments/delete
// @desc Delete comment
// @access Private
router.delete('/delete', authenticate, async (req, res) => {
  const { id, author } = req.body;

  // Make sure user owns comment
  if (author.toString() !== req.user.id)
    return res.status(401).json({ msg: 'Not authorized' });

  try {
    let comment = await UserComment.findById(id);

    if (!comment) return res.status(404).json({ message: 'Comment not found' });

    await UserComment.findByIdAndRemove(id);

    res.json({ message: 'Comment deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
