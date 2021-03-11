const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Route works'
  })
});

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) => {

  }
);

module.exports = router;
