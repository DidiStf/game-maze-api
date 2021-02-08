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
const wakeUpDyno = require('./utils/wakeUpDyno');

dotenv.config({ path: './config/config.env' });
const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;
const DYNO_URL = 'https://game-maze.herokuapp.com/api/games';

const app = express();

// Connect to Database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api/comments', comments);
app.use('/api/games', games);
app.use('/api/messages', messages);
app.use('/api/ratings', ratings);
app.use('/api/users', users);

app.listen(PORT, () => {
  wakeUpDyno(DYNO_URL);
  console.log(`Server running in ${ENV} mode on port ${PORT}`.cyan.bold);
});
