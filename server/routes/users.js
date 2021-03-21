const express = require('express');
const {
  updateUser
} = require('../controllers/users');

const router = express.Router();

const { protect } = require('../middleware/auth');

router.put('/users/:id', protect, updateUser)

module.exports = router;
