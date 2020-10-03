const bcrypt = require('bcryptjs');
const User = require('../models/User');

exports.findOneByEmail = (email) => User.findOne({ email }).select('-password');

exports.findOneByEmailForAuthentication = (email) => User.findOne({ email });

exports.findOneById = (id) => User.findById(id).select('-password');

exports.findOneByUsername = (username) =>
  User.findOne({ username }).select('-password');

exports.saveUser = async (userData, ...args) => {
  const { username, email, password } = userData;
  const user = new User({ username, email, password });
  const salt = await bcrypt.genSalt(10);

  user.password = await bcrypt.hash(password, salt);
  await user.save();

  return user;
};

exports.updateUserById = (id, userData) =>
  User.findByIdAndUpdate(id, { $set: userData }, { new: true });

exports.deleteUserById = (id) => User.findByIdAndRemove(id);
