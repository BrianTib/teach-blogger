const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userSeedData = require('./usersSeedData.json');
const postSeedData = require('./postsSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log("----------- SEEDING CONNECTED TO DATABASE -----------");
  
  await User.bulkCreate(userSeedData, { individualHooks: true });
  console.log("----------- DONE SEEDING USERS -----------");
  await Post.bulkCreate(postSeedData);
  console.log("----------- DONE SEEDING POSTS -----------", "\n----------- SEEDING COMPLETED -----------");
  process.exit(0);
};

seedDatabase();
