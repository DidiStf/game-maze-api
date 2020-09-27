const mongoose = require('mongoose');

const GameSchema = mongoose.Schema(
  {
    averageRating: { type: Number, min: 0, max: 5, default: 0 },
    description: String,
    developer: String,
    genres: [{ type: String, required: true }],
    imageUrl: { type: String, required: true },
    platforms: [{ type: String, required: true }],
    publisher: String,
    releaseDate: String,
    trailerUrl: String,
    title: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('game', GameSchema);
