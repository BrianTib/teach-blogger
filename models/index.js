const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// Setup the association between a user and a post
User.hasMany(Post, {
  foreignKey: 'author'
});

Post.belongsTo(User, {
    foreignKey: 'author',
    onDelete: 'CASCADE'
});

// Setup the relationship between a commend and a post
Post.hasMany(Comment, {
  foreignKey: 'id'
});

Comment.belongsTo(Post, {
  foreignKey: 'id',
  onDelete: 'CASCADE'
});

module.exports = { User, Post, Comment };