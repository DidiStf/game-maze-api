const mongoose = require('mongoose');
const config = require('config');

const uri = 'mongoURI';
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
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
