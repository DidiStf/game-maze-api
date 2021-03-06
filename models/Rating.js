const mongoose = require('mongoose');

const RatingSchema = mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    game: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'game',
      required: true,
    },
    value: { type: Number, required: true, min: 1, max: 5 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('rating', RatingSchema);
