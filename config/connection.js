const Sequelize = require('sequelize');
// We require this here also as well as on server.js in case we are just seeding the database
require('dotenv').config();

let sequelize;
// Checks to see if the application is deployed. If DB_URL environment variable exists, then that is used. If not, it determines that you're on your local machine and utilizes the environment variables from the .env file to set up Sequelize.
if (process.env.DB_URL) {
  sequelize = new Sequelize(process.env.DB_URL, {
    hooks: {
      //workaround to prefix database table names in render
      beforeDefine: function (columns, model) {
        model.tableName = `${process.env.DB_NAME}_${model.name.singular}`;
      },
    },
  });
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'postgres',
    }
  );
}

module.exports = sequelize;
//postgresql://tech_blogger_user:nbHhIMcZVd7Vt8q4DvFs6H3GF7im2Q9x@dpg-cq89n1ss1f4s73chhllg-a.ohio-postgres.render.com/tech_blogger