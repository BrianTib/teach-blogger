const Sequelize = require('sequelize');
// We require this here also as well as on server.js in case we are just seeding the database
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'postgres'
  }
);

module.exports = sequelize;
