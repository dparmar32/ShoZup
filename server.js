
const path = require('path');
const express = require('express');
const session = require('express-session');

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const bcrypt = require('bcrypt') //to encrypt password, adding more security to our users

const exphbs = require('express-handlebars')
const hbs = exphbs.create({ helpers });
// const Joi = require('joi');

//set up express app
const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars',hbs.engine);
app.set('view engine','handlebars');

// Set up sessions
const sess = {
  secret: 'Super secret secret',
  resave: true,
  saveUninitialized: true,
};

app.use(session(sess));


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
<<<<<<< HEAD
//<<<<<<< HEAD
app.use(require('./controllers/api/userRoutes.js'));
app.use(require('./controllers/api/productRoutes.js'));
app.use(require('./controllers/api/categoryRoutes.js'));

//=======
// app.use(require('./controllers/api/userRoutes.js'));
// app.use(require('./controllers/api/projectRoutes.js'));
//>>>>>>> a44f2daafd943f4d8bf6dbbe527c48495a9f4163

// Connect to the database before starting the Express.js server

// Starts the server to begin listening
app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
  });
=======

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening port 3001'));
});
>>>>>>> 372b5fe707af6e3e4933b761db058a53f1f8b6a7

