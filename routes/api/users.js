const fs = require('fs');
const express = require('express');
const routes = require('./routes');
const Sequelize = require("sequelize");

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const router = require('./shoeRoutes');
const router = require('express').Router();

const user = require('../../models/Users')

//Create a New User
router.post("/signup", (req, res, next) => {
// save because you can't reverse/translate a hash to plain text
  bcrypt.hash(req,body,password, 10, (err, hash) => {
    if (err) {
        return req.statusCode(500).json({
            error: err
        });
    }else {
        const user = new user({
        _id: new mongoose.Types.ObjectId(),
        email: req.body.email,
        password: hash
        });
        user
            .save()
            .then(result => {
                console.log(result)
                res.status(201).json({
                    message: 'User Created'
                })
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                })
            })


            }
        })
    })

    module.export = router;