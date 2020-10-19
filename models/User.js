const bcrypt = require('bcryptjs');
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

// Hashes password automatically
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = bcrypt.hashSync(this.password, salt);
  this.password = hashedPassword;
});

UserSchema.methods.comparePassword = function (plaintext, callback) {
  return callback(null, bcrypt.compareSync(plaintext, this.password));
};

module.exports = mongoose.model('user', UserSchema);
