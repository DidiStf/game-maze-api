const Message = require('../models/Message');

exports.findByOwnerId = (id) =>
  Message.find({ owner: id })
    .populate('recipient', ['avatar', 'username'])
    .populate('sender', ['avatar', 'username'])
    .sort({ createdAt: 1 });

exports.findOneById = (id) =>
  Message.findById(id)
    .populate('recipient', ['avatar', 'username'])
    .populate('sender', ['avatar', 'username']);

exports.saveMessage = async (messages) => Message.create(messages);

exports.removeMessageById = (id) => Message.findByIdAndRemove(id);
