const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

/* This is a conditional statement that checks if the JAWSDB_URL is defined. If it is defined, it will
use the JAWSDB_URL. If it is not defined, it will use the other sequelize code. */
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;
