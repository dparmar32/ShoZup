const fs = require('fs');
const express = require('express');
// const routes = require('./routes');
const Sequelize = require("sequelize");
const exphbs = require('express-handlebars')
const hbs = exphbs.create({})
const path = require('path');
const bcrypt = require('bcrypt') //to encrypt password, adding more security to our users
// const Joi = require('joi');


// Import the connection object
const sequelize = require('./config/connection');
//set up express app
const app = express();
const PORT = process.env.PORT || 3002;

app.engine('handlebars',hbs.engine);
app.set('view engine','handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//turn on routes
// app.use(routes);
app.use(express.static(path.join(__dirname, 'public')));
// app.use(require('./controllers/api/userRoutes.js'));
// app.use(require('./controllers/api/projectRoutes.js'));

// Connect to the database before starting the Express.js server
// Starts the server to begin listening
app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
  });

