const fs = require('fs');
const express = require('express');
const routes = require('./routes');
const Sequelize = require("sequelize");


const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

//Create a new user model//
const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: { type: String, required: true },
    password: { type: String, required: true }
});




module.exports = mongoose.model('User', userSchema);