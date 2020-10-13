const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    content: { type: String, min: 5, max: 255 },
    game: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'game',
      required: true,
    },
    title: { type: String, required: true, min: 3, max: 50 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('comment', CommentSchema);
