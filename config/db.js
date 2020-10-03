const mongoose = require('mongoose');
const config = require('config');

const env = process.env.NODE_ENV;
const uri = env === test ? 'testMongoURI' : 'mongoURI';
const db = config.get(uri);

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log('MongoDB Connected...'.green);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
