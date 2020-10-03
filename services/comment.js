const UserComment = require('../models/Comment');

exports.findByGameId = (id) =>
  UserComment.find({ game: id }).sort({ createdAt: -1 });

exports.findOneById = (id) => UserComment.findById(id);

exports.saveComment = async (commentData) => {
  const newComment = new UserComment(commentData);
  const comment = await newComment.save();

  return comment;
};

exports.updateCommentById = (id, commentData) =>
  UserComment.findByIdAndUpdate(id, { $set: commentData }, { new: true });

exports.removeCommentById = (id) => UserComment.findByIdAndRemove(id);
