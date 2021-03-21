const User = require('../models/User');
const errorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

// @desc    Update user
// @route   PUT /api/v1/users/users/:id
// @access  Private
exports.updateUser = asyncHandler(async (req, res, next) => {
  const files = req.files['thumb'];

  if(files.length) {
    req.body.photo = files[0].path
  }

  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    success: true,
    data: user
  })
});
