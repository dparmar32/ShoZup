const fs = require('fs');
const express = require('express');
const routes = require('./routes');
const Sequelize = require("sequelize");

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const router = require('./shoeRoutes');
const router = require('express').Router();

const user = require('../../models/Users')


// Post Users
router.post('/signup', (req, res) => {
    User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
    .then(dbUserData => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.email = dbUserData.email;
        req.session.loggedIn = true;
    
        res.json(dbUserData);
      });
    });
});

// Login route
router.post('/login', (req, res) => {
    User.findOne({
      where: {
        username: req.body.username
      }
    }).then(dbUserData => {
      if (!dbUserData) {
        res.status(400).json({ message: 'No user with that user name!' });
        return;
      }
  
      const validPassword = dbUserData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect password!' });
        return;
      }
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.email = dbUserData.email;
        req.session.loggedIn = true;

        res.json({ user: dbUserData, message: 'You are now logged in!' });
      });
    });
  });

// Logout route
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    }
    else {
      res.status(404).end();
    }
});


// //Create a New User SignUp
// router.post("/signup", (req, res, next) => {
// // save because you can't reverse/translate a hash to plain text
//   bcrypt.hash(req,body,password, 10, (err, hash) => {
//     if (err) {
//         return req.statusCode(500).json({
//             error: err
//         });
//     }else {
//         const user = new user({
//             username: req.body.username,
//             email: req.body.email,
//             password: hash
//     });
//     user
//             .save()
//             .then(result => {
//                 console.log(result)
//                 res.status(201).json({
//                     message: 'User Created'
//                 })
//             })
//             .catch(err => {
//                 console.log(err);
//                 res.status(500).json({
//                     error: err
//                 })
//             })


//             }
//         })
//     })

//Create User Sign In



    module.export = router;