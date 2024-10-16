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
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
  } catch (error) {
    console.log(error);
  }
};
export default connectDb;
