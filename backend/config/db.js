/** @format */

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongodb connect succesfully ${conn.connection.host}`);
  } catch (error) {
    console.log("error is occured at database connection");
    process.exit(1);
  }
};

export default connectDB;
