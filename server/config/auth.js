module.exports = {
  ensureAuthenticated: function(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    req.flash('error_msg', 'Please log in to view that resource');
    res.redirect('/users/login');
  },
  forwardAuthenticated: function(req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    }
    res.redirect('/dashboard');
  },
  sendTokenResponse: function(user, statusCode, res) {
    // Create token
    const token = user.getSignedJwtToken();

    const options = {
      expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
      httpOnly: true
    };

    if(process.env.NODE_ENV === 'production'){
      options.secure = true
    }

    res
      .status(statusCode)
      .cookie('token', token, options)
      .json({
        success: true,
        data: user,
        token
      })
  }
};
