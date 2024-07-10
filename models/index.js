const User = require('./User');
const Post = require('./Post');

// Setup the association between a user and a post
User.hasMany(Post);
Post.belongsTo(User);

module.exports = { User, Post };