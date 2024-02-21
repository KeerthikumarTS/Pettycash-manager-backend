const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Mongodb connected to the host: ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`Mongodb connection error! ${error}`);
  }
};

module.exports = connectDB;
