const User = require('../models/User');

exports.findOneByEmail = (email) => User.findOne({ email }).select('-password');

exports.findOneByEmailForAuthentication = (email) => User.findOne({ email });

exports.findOneById = (id) => User.findById(id).select('-password');

exports.findOneByUsername = (username) =>
  User.findOne({ username }).select('-password');

exports.findAll = () => User.find().select('-password');

exports.saveUser = (userData) => User.create(userData);

exports.updateUserById = (id, userData) =>
  User.findByIdAndUpdate(id, { $set: userData }, { new: true });

exports.deleteUserById = (id) => User.findByIdAndRemove(id);
