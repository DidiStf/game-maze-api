const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

const connectDB = require('./config/db');
const comments = require('./routes/comments');
const games = require('./routes/games');
const messages = require('./routes/messages');
const ratings = require('./routes/ratings');
const users = require('./routes/users');

dotenv.config({ path: './config/config.env' });

const app = express();

// Connect to Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) =>
  res.json({ message: 'Welcome to the Game Maze App' })
);

// Define Routes
app.use('/api/comments', comments);
app.use('/api/games', games);
app.use('/api/messages', messages);
app.use('/api/ratings', ratings);
app.use('/api/users', users);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.cyan.bold
  )
);
