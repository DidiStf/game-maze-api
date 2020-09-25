const jwt = require('jsonwebtoken');
const config = require('config');

const authenticateSuperAdmin = (req, res, next) => {
  // Get the token from the header
  const token = req.header('x-auth-token');

  // Check if not token
  if (!token)
    return res.status(401).json({ message: 'No token, authorisation denied.' });

  try {
    const { user } = jwt.verify(token, config.get('jwtSecret'));

    if (user.role !== 'super_admin')
      return res.status(403).json({ message: 'No sufficiant rights.' });

    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid.' });
  }
};

module.exports = authenticateSuperAdmin;
