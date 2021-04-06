const express = require('express');
const {
  updateUser,
  getUsers
} = require('../controllers/users');

const router = express.Router();

const { protect } = require('../middleware/auth');

router.put('/:id', protect, updateUser)
router.get('/', protect, getUsers)

module.exports = router;
