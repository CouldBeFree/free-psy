const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

const User = require('../models/User');

// Register handle
router.post('/register', async (req, res, next) => {
  const { name, email, password, password2 } = req.body;
  console.info('name', name);
  console.info('email', email);
  console.info('password', password);
  console.info('password2', password2);

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

      // Hash password
      bcrypt.genSalt(10, (err, salt) =>
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if(err) throw err;
          // Set password to hashed
          newUser.password = hash;
          // Save the user
          newUser.save()
            .then(user => {
              res.status(201).json({
                status: 'ok',
                message: 'User successfully registered'
              })
            })
            .catch(err => {
              res.status(500).json({
                status: 'error',
                message: err
              })
            })
        }))
    }
  } catch (err) {
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
