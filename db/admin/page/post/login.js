const User = require('../../../model/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {loginValidation} = require('../../../validation');

async function login(req,res) {
    // Lets Validate the Data before we a user
    const {error} = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Checking if the email exists
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send('Email is not found');
    // Password is Correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('Invalid password');

    // Create and assign a token 
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token);
    res.send(token);


    // res.send('Logged in');
}

module.exports = login;