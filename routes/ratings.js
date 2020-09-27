const express = require('express');
const { body, validationResult } = require('express-validator');

const authenticate = require('../middleware/authenticate');
const Rating = require('../models/Rating');
const Game = require('../models/Game');

const router = express.Router();

// @route POST api/ratings/create
// @desc Add new rating
// @access Private
router.post(
  '/create',
  [
    authenticate,
    [
      body('game', 'Game is required.').not().isEmpty(),
      body('value', 'Value is required.').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    const { id } = req.user;
    const { game, value } = req.body;

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const duplicateRating = await Rating.findOne({
      $and: [{ author: id }, { game }],
    });

    if (duplicateRating)
      return res.status(400).json({ message: 'Game already rated' });

    try {
      const newRating = new Rating({
        author: id,
        game,
        value,
      });

      const rating = await newRating.save();

      // Update concerned game average rating
      const gameRatings = await Rating.find({ game });
      const gameRatingsValues = gameRatings.map(({ value }) => value);
      const averageRating =
        gameRatingsValues.reduce((a, b) => a + b) / gameRatingsValues.length;

      await Game.findByIdAndUpdate(game, { $set: { averageRating } });

      res.json(rating);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ message: 'Server Error' });
    }
  }
);

// @route PUT api/ratings/update
// @desc Update rating
// @access Private
router.put('/update', authenticate, async (req, res) => {
  const { id, author, game, value } = req.body;

  // Make sure user owns rating
  if (author.toString() !== req.user.id)
    return res.status(401).json({ message: 'Not authorized' });

  try {
    let rating = await Rating.findById(id);

    if (!rating) return res.status(404).json({ message: 'Rating not found' });

    // Build updated comment object
    const updatedRating = {
      value: value || rating.value,
    };

    rating = await Rating.findByIdAndUpdate(
      id,
      { $set: updatedRating },
      { new: true }
    );

    // Update concerned game average rating
    const gameRatings = await Rating.find({ game });
    const gameRatingsValues = gameRatings.map(({ value }) => value);
    const averageRating =
      gameRatingsValues.reduce((a, b) => a + b) / gameRatingsValues.length;

    await Game.findByIdAndUpdate(game, { $set: { averageRating } });

    res.json(rating);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

// @route DELETE api/ratings/delete
// @desc Delete rating
// @access Private
router.delete('/delete', authenticate, async (req, res) => {
  const { id, author, game } = req.body;

  // Make sure user owns rating
  if (author.toString() !== req.user.id)
    return res.status(401).json({ message: 'Not authorized' });

  try {
    let rating = await Rating.findById(id);

    if (!rating) return res.status(404).json({ message: 'Rating not found' });

    await Rating.findByIdAndRemove(id);

    // Update concerned game average rating
    const gameRatings = await Rating.find({ game });
    const gameRatingsValues = gameRatings.map(({ value }) => value);
    let averageRating = 0;

    if (gameRatingsValues.length) {
      averageRating =
        gameRatingsValues.reduce((a, b) => a + b) / gameRatingsValues.length;
    }

    await Game.findByIdAndUpdate(game, { $set: { averageRating } });

    res.json({ message: 'Rating deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
