const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema(
  {
    content: { type: String, required: true, min: 5, max: 255 },
    recipient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    subject: { type: String, required: true, min: 3, max: 50 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('message', MessageSchema);
