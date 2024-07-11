const User = require('./User');
const Post = require('./Post');

// Setup the association between a user and a post
User.hasMany(Post, {
  foreignKey: 'author'
});

Post.belongsTo(User, {
    foreignKey: 'author',
    onDelete: 'CASCADE'
});

module.exports = { User, Post };