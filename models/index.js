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
  foreignKey: 'post_id'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

// Setup the relationship between a commend and a post
Comment.belongsTo(User, {
  foreignKey: 'author',
  onDelete: 'CASCADE'
});

User.hasMany(Comment, {
  foreignKey: 'author',
  onDelete: 'CASCADE'
});

module.exports = { User, Post, Comment };