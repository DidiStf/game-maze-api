const Rating = require('../models/Rating');

exports.findDuplicateRating = (author, game) =>
  Rating.findOne({ $and: [{ author }, { game }] });

exports.findByGameId = (id) =>
  Rating.find({ game: id }).populate('author', ['avatar', 'username']);

exports.findOneById = (id) =>
  Rating.findById(id).populate('author', ['avatar', 'username']);

exports.saveRating = async (ratingData) => Rating.create(ratingData);

exports.updateRatingById = (id, ratingData) =>
  Rating.findByIdAndUpdate(id, { $set: ratingData }, { new: true });

exports.removeRatingById = (id) => Rating.findByIdAndRemove(id);
