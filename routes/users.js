const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('config');
const { body, validationResult } = require('express-validator');

const authenticate = require('../middleware/authenticate');
const userService = require('../services/user');

const router = express.Router();

router.get('/', authenticate, async (req, res) => {
  const user = await userService.findOneById(req.user.id);

  // Make sure user have admin rights
  if (user.role !== 'super-admin')
    return res.status(403).json({ message: 'No sufficiant rights.' });

  try {
    const users = await userService.findAll();
    res.json(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;

router.get('/getOneByToken', authenticate, async (req, res) => {
  const { id } = req.user;
  try {
    let user = await userService.findOneById(id);
    res.json({ user });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;

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
      let user = await userService.findOneByEmail(email);

      if (user) {
        return res
          .status(409)
          .json({ message: 'There is already an account with this email' });
      }

      user = await userService.findOneByUsername(username);

      if (user) {
        return res.status(409).json({ message: 'This username is taken' });
      }

      user = await userService.saveUser({ username, email, password });

      const payload = { user: { id: user.id } };
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          // Set token to expire in 3 hours
          expiresIn: 10800,
        },
        (error, token) => {
          if (error) throw error;
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;

router.post(
  '/login',
  [
    body('email', 'Please include a valid email.').isEmail(),
    body('password', 'Please enter a password.').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      const user = await userService.findOneByEmailForAuthentication(email);
      if (!user) {
        return res.status(401).json({ message: 'Inavlid credentials' });
      }

      user.comparePassword(password, (_, match) => {
        if (!match) {
          return res.status(400).json({ message: 'Invalid credentials' });
        }
      });

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          // Set token to expire in 3 hours
          expiresIn: 10800,
        },
        (error, token) => {
          if (error) throw error;
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Server Error' });
    }
  }
);

module.exports = router;

router.put(
  '/update',
  [
    authenticate,
    [
      body('email', 'Please include a valid email.').isEmail(),
      body('username', 'Please enter a username.').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    const userData = req.body;
    const {
      id,
      avatar,
      dateOfBirth,
      email,
      firstName,
      lastName,
      username,
    } = userData;

    try {
      let user = await userService.findOneById(req.user.id);

      // Make sure user modifies his own profile
      if (id.toString() !== req.user.id)
        return res.status(401).json({ message: 'Not authorized' });

      if (!user) return res.status(404).json({ message: 'User not found' });

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      if (email && email !== user.email) {
        const otherUserWithEmail = await userService.findOneByEmail(email);

        if (otherUserWithEmail)
          return res
            .status(409)
            .json({ message: 'There is already an account with this email.' });
      }

      if (username && username !== user.username) {
        const otherUserWithUsername = await userService.findOneByUsername(
          username
        );

        if (otherUserWithUsername)
          return res.status(409).json({ message: 'This username is taken' });
      }

      // Build updated user object
      const updatedUser = {
        avatar: avatar || user.avatar,
        dateOfBirth: dateOfBirth || user.dateOfBirth,
        email: email || user.email,
        firstName: firstName || user.firstName,
        lastName: lastName || user.lastName,
      };

      user = await userService.updateUserById(id, updatedUser);

      res.json(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Server Error' });
    }
  }
);

router.put(
  '/update/setAdmin',
  [authenticate, [body('role', 'Please enter a role').not().isEmpty()]],
  async (req, res) => {
    const userData = req.body;
    const { id } = userData;

    const user = await userService.findOneById(req.user.id);

    // Make sure user have admin rights
    if (user.role !== 'super-admin')
      return res.status(403).json({ message: 'No sufficiant rights.' });

    try {
      let userToUpdate = await userService.findOneById(id);

      if (!userToUpdate)
        return res.status(404).json({ message: 'User not found' });

      // Build updated game object
      const updatedUser = {
        role: userData.role,
      };

      userToUpdate = await userService.updateUserById(id, updatedUser);

      res.json(userToUpdate);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Server Error' });
    }
  }
);

router.delete('/delete', authenticate, async (req, res) => {
  const userData = req.body;
  const { id } = userData;

  const user = await userService.findOneById(req.user.id);

  // Make sure user have admin rights
  if (user.role !== 'super-admin')
    return res.status(403).json({ message: 'No sufficiant rights' });

  try {
    let userToDelete = await userService.findOneById(id);

    if (!userToDelete)
      return res.status(404).json({ message: 'User not found' });

    await userService.deleteUserById(id);

    res.json({ message: 'User deleted' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
