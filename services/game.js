const Game = require('../models/Game');

exports.findAll = () => Game.find();

exports.findOneById = (id) => Game.findById(id);

exports.saveGame = async (gameData) => {
  const newGame = new Game(gameData);
  const game = await newGame.save();

  return game;
};

exports.updateGameById = (id, gameData) =>
  Game.findByIdAndUpdate(id, { $set: gameData }, { new: true });

exports.removeGameById = (id) => Game.findByIdAndRemove(id);
