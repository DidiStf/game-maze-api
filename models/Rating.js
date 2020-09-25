const mongoose = require('mongoose');

const RatingSchema = mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
    },
    game: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'games',
    },
    value: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('rating', RatingSchema);
