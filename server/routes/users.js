const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/User');
const { sendTokenResponse } = require('../config/auth');
const passportSignIn = passport.authenticate('local', { session: false });

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
    res.status(500).json({
      status: 'error',
      message: err
    })
  }
});

// Login
router.post('/login', passportSignIn, async (req, res, next) => {
  const user = await User.find({"_id": req.user._id});

  sendTokenResponse(user[0], 200, res);
});

module.exports = router;
