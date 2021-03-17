const express = require('express');
const router = express.Router();

// Welcome Page
router.get('/', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Route works'
  })
});

module.exports = router;
