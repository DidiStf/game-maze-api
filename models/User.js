const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
  {
    avatar: String,
    dateOfBirth: String,
    email: { type: String, required: true, unique: true },
    firstName: String,
    lastName: String,
    password: { type: String, required: true, min: 6 },
    role: {
      type: String,
      enum: ['user', 'admin', 'super_admin'],
      default: 'user',
    },
    username: { type: String, required: true, unique: true, min: 3, max: 20 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('user', UserSchema);
