const fs = require('fs');
const express = require('express');
const routes = require('./routes')
const Sequelize = require("sequelize");

const Joi = require('joi');


// Import the connection object
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//turn on routes
app.use(routes);

// Connect to the database before starting the Express.js server
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

