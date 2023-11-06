const mongoose = require("mongoose");

const Databaseurl = process.env.DATABASE;

const connectdb = async () => {
  try {
    await mongoose.connect(Databaseurl, {
      useNewUrlParser: true,
    });
    console.log(`Mongodb connected succefully`.bgGreen);
  } catch (error) {
    console.error(`Mongodb not connected ${error}`.bgRed);
    process.exit(1);
  }
};
module.exports = connectdb;
