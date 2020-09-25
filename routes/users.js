const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { body, validationResult } = require('express-validator');

const authenticate = require('../middleware/authenticate');
const User = require('../models/User');

const router = express.Router();

// @route POST api/users/create
// @desc Register a user
// @access Public
router.post(
  '/create',
  [
    body('username', 'The username must be between 3 and 20 characters.')
      .not()
      .isEmpty(),
    body('email', 'Please include a valid email.').isEmail(),
    body(
      'password',
      'Please enter a password with 6 or more characters.'
    ).isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ message: 'User already exists' });
      }

      user = await User.findOne({ username });

      if (user) {
        return res
          .status(400)
          .json({ message: 'This username is alerady taken' });
      }

      user = new User({
        username,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;

// @route POST api/users/login
// @desc Login user and get token
// @access Public
router.post(
  '/login',
  [
    body('email', 'Please include a valid email.').isEmail(),
    body('password', 'Please enter a password.').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: 'Inavlid credentials' });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ message: 'Server Error' });
    }
  }
);

module.exports = router;

// @route GET api/users/getOneByToken
// @desc Get logged in user
// @access Private
router.get('/getOneByToken', authenticate, async (req, res) => {
  try {
    let user = await User.findById(req.user.id).select('-password');
    res.json({ user });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;

// @route PUT api/users/update
// @desc Update user
// @access Private
router.put('/update', authenticate, async (req, res) => {
  const userData = req.body;
  const { id, email } = userData;

  try {
    let user = await User.findById(id);

    if (!user) return res.status(404).json({ message: 'User not found' });

    if (email && email !== user.email) {
      const otherUser = await User.findOne({ email: email });

      if (otherUser)
        return res.status(400).json({ message: 'This email is already taken' });
    }

    // Build updated user object
    const updatedUser = {
      avatar: userData.averageRating || user.averageRating,
      dateOfBirth: userData.dateOfBirth || user.dateOfBirth,
      email: userData.email || user.email,
      firstName: userData.firstName || user.firstName,
      lastName: userData.lastName || user.lastName,
      username: userData.username || user.username,
    };

    user = await User.findByIdAndUpdate(
      id,
      { $set: updatedUser },
      { new: true }
    );

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

// @route PUT api/users/setAdmin
// @desc Set admin rights
// @access Private Admin
router.put('/update/setAdmin', authenticate, async (req, res) => {
  const userData = req.body;
  const { id } = userData;

  const user = await User.findById(req.user.id);

  // Make sure user have admin rights
  if (user.role !== 'super-admin')
    return res.status(403).json({ message: 'No sufficiant rights.' });

  try {
    let userToUpdate = await User.findById(id);

    if (!userToUpdate)
      return res.status(404).json({ message: 'User not found' });

    // Build updated game object
    const updatedUser = {
      role: userData.role,
    };

    user = await user.findByIdAndUpdate(
      id,
      { $set: updatedUser },
      { new: true }
    );

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

// @route DELETE api/users/delete
// @desc Delete user
// @access Private
router.delete('/delete', authenticate, async (req, res) => {
  const userData = req.body;
  const { id } = userData;

  const user = await User.findById(req.user.id);

  // Make sure user have admin rights
  if (user.role !== 'super-admin')
    return res.status(403).json({ message: 'No sufficiant rights.' });

  try {
    let userToDelete = await User.findById(id);

    if (!userToDelete)
      return res.status(404).json({ message: 'User not found' });

    await User.findByIdAndRemove(id);

    res.json({ message: 'User deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
