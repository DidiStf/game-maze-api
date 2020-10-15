const express = require('express');
const { body, validationResult } = require('express-validator');

const authenticate = require('../middleware/authenticate');
const commentService = require('../services/comment');
const gameService = require('../services/game');

const router = express.Router();

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const comments = await commentService.findByGameId(id);
    res.json(comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.post(
  '/create',
  [
    authenticate,
    [
      body('game', 'Game is required.').not().isEmpty(),
      body('title', 'Title is required.').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    const { id } = req.user;
    const { content, game, title } = req.body;

    const commentedGame = await gameService.findOneById(game);

    if (!commentedGame)
      return res.status(404).json({ message: 'Game not found' });

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const newComment = {
        author: id,
        content,
        game,
        title,
      };

      const comment = await commentService.saveComment(newComment);

      res.json(comment);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ message: 'Server Error' });
    }
  }
);

router.put(
  '/update',
  [
    authenticate,
    [
      body('game', 'Game is required.').not().isEmpty(),
      body('title', 'Title is required.').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    const { id, author, content, title } = req.body;

    // Make sure user owns comment
    if (author.toString() !== req.user.id)
      return res.status(401).json({ message: 'Not authorized' });

    const commentedGame = await gameService.findOneById(game);

    if (!commentedGame)
      return res.status(404).json({ message: 'Game not found' });

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let comment = await commentService.findOneById(id);

      if (!comment)
        return res.status(404).json({ message: 'Comment not found' });

      // Build updated comment object
      const updatedComment = {
        content: content || comment.content,
        title: title || comment.title,
      };

      comment = await commentService.updateCommentById(id, updatedComment);

      res.json(comment);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ message: 'Server Error' });
    }
  }
);

router.delete('/delete', authenticate, async (req, res) => {
  const { id, author } = req.body;

  // Make sure user owns comment
  if (author.toString() !== req.user.id)
    return res.status(401).json({ message: 'Not authorized' });

  const commentedGame = await gameService.findOneById(game);

  if (!commentedGame)
    return res.status(404).json({ message: 'Game not found' });

  try {
    let comment = await commentService.findOneById(id);

    if (!comment) return res.status(404).json({ message: 'Comment not found' });

    await commentService.removeCommentById(id);

    res.json({ message: 'Comment deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
