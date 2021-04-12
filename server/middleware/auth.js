const errorResponse = require('../utils/errorResponse');
const asyncHandler = require('./async');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.protect = asyncHandler(async (req, res, next) => {
  const token  = req.cookies.token;

  // Make sure token exists
  if(!token){
    return next(new errorResponse('Not authorized to access this route', 401))
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
  } catch (e) {
    return next(new errorResponse('Not authorized to access this route', 401))
  }
});
