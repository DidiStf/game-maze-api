const Rating = require('../models/Rating');

exports.findDuplicateRating = (author, game) =>
  Rating.findOne({ $and: [{ author }, { game }] });

exports.findByGameId = (id) => Rating.find({ game: id });

exports.findOneById = (id) => Rating.findById(id);

exports.saveRating = async (ratingData) => {
  const newRating = new Rating(ratingData);
  const rating = await newRating.save();

  return rating;
};

exports.updateRatingById = (id, ratingData) =>
  Rating.findByIdAndUpdate(id, { $set: ratingData }, { new: true });

exports.removeRatingById = (id) => Rating.findByIdAndRemove(id);
