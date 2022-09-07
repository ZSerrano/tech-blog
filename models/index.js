const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

Comment.belongsTo(User, {
  foreignKey: "userId",
});

Post.belongsTo(User, {
  foreignKey: "userId",
});

Post.hasMany(Comment, {
  foreignKey: "postId",
});

module.exports = {
  User,
  Comment,
  Post,
};
