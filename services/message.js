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

exports.saveMessage = async (senderMessageData, recipientMessageData) => {
  const newMessageSender = new Message(senderMessageData);
  const newMessageRecipient = new Message(recipientMessageData);

  const messageSender = await newMessageSender.save();
  await newMessageRecipient.save();

  return messageSender;
};

exports.removeMessageById = (id) => Message.findByIdAndRemove(id);
