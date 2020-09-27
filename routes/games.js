const express = require('express');
const { body, validationResult } = require('express-validator');

const authenticate = require('../middleware/authenticate');
const Game = require('../models/Game');
const User = require('../models/User');

const router = express.Router();

// @route GET api/games
// @desc Get all games
// @access Public
router.get('/', async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

// @route POST api/games/create
// @desc Add new game
// @access Private
router.post(
  '/create',
  [
    authenticate,
    [
      body('genres', 'Genres is required.').not().isEmpty(),
      body('imageUrl', 'ImageUrl is required.').not().isEmpty(),
      body('platforms', 'Platforms is required.').not().isEmpty(),
      body('title', 'Title is required.').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const user = await User.findById(req.user.id);

    // Make sure user have admin rights
    if (user.role !== 'admin' && user.role !== 'super-admin')
      return res.status(403).json({ message: 'No sufficiant rights.' });

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      description,
      developer,
      genres,
      imageUrl,
      platforms,
      publisher,
      releaseDate,
      trailerUrl,
      title,
    } = req.body;

    try {
      const newGame = new Game({
        description,
        developer,
        genres,
        imageUrl,
        platforms,
        publisher,
        releaseDate,
        trailerUrl,
        title,
      });

      const game = await newGame.save();

      res.json(game);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ message: 'Server Error' });
    }
  }
);

// @route PUT api/games/update
// @desc Update game
// @access Private
router.put('/update', authenticate, async (req, res) => {
  const gameData = req.body;
  const { id } = gameData;

  const user = await User.findById(req.user.id);

  // Make sure user have admin rights
  if (user.role !== 'admin' && user.role !== 'super-admin') {
    console.log('in if');
    return res.status(403).json({ message: 'No sufficiant rights.' });
  }

  try {
    let game = await Game.findById(id);

    if (!game) return res.status(404).json({ message: 'Game not found' });

    // Build updated game object
    const updatedGame = {
      description: gameData.description || game.description,
      developer: gameData.developer || game.developer,
      genres: gameData.genres || game.genres,
      imageUrl: gameData.imageUrl || game.imageUrl,
      platforms: gameData.platforms || game.platforms,
      publisher: gameData.publisher || game.publisher,
      releaseDate: gameData.releaseDate || game.releaseDate,
      trailerUrl: gameData.trailerUrl || game.trailerUrl,
      title: gameData.title || game.title,
    };

    game = await Game.findByIdAndUpdate(
      id,
      { $set: updatedGame },
      { new: true }
    );

    res.json(game);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

// @route DELETE api/games/delete
// @desc Delete game
// @access Private
router.delete('/delete', authenticate, async (req, res) => {
  const gameData = req.body;
  const { id } = gameData;

  const user = await User.findById(req.user.id);

  // Make sure user have admin rights
  if (user.role !== 'admin' && user.role !== 'super-admin')
    return res.status(403).json({ message: 'No sufficiant rights.' });

  try {
    let game = await Game.findById(id);

    if (!game) return res.status(404).json({ message: 'Game not found' });

    await Game.findByIdAndRemove(id);

    res.json({ message: 'Game deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
