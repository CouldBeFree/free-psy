const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/User');
const { sendTokenResponse } = require('../config/auth');

// Register handle
router.post('/register', async (req, res, next) => {
  const { name, email, password, password2 } = req.body;

  if (!name || !email || !password || !password2) {
    res.status(406).json({
      status: 'ok',
      message: 'Missed required field'
    });
    return;
  }

  try {
    const user = await User.findOne({ email: email });
    if (user) {
      res.status(406).json({
        status: 'ok',
        message: `User with email ${email} already exists`
      });
    } else {
      const newUser = await new User({
        name,
        email,
        password
      });

      await newUser.save();

      sendTokenResponse(newUser, 201, res);
    }
  } catch (err) {
    console.dir(err);
    res.status(500).json({
      status: 'error',
      message: err
    })
  }
});

// Login
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
});

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/users/login');
});

module.exports = router;
