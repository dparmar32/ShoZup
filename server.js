const path = require('path');
const express = require('express');
const session = require('express-session');

const routes = require('./controllers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const helpers = require('./utils/helpers');

const bcrypt = require('bcrypt') //to encrypt password, adding more security to our users

const exphbs = require('express-handlebars')
const hbs = exphbs.create({helpers});
// const Joi = require('joi');

//set up express app
const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Set up sessions
const sess = {
    secret: 'Super secret secret',
    resave: true,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log('Now listening to http://localhost:3001/'));
});

