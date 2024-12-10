import mongoose from "mongoose";

let connected = false;

const connectDb = async () => {
  mongoose.set("strictQuery", true);

  //if db is already connected, dont connect again
  if (connected) {
    console.log("MongoDB is already connected");
    return;
  }
  //Connect to db
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.log("Error connecting to Database:", error);
  }
};
export default connectDb;
