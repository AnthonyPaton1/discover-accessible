import { Schema, model, models } from "mongoose";

console.log("mongoose.models", models);

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, "Email already exists"],
      required: [true, "Email is required"],
    },
    username: {
      type: String,
      required: [true, "Username is required"],
    },
    image: {
      type: String,
    },
    bookmarks: [
      {
        type: Schema.Types.ObjectId,
        ref: "Property",
      },
    ],
    // Add the role field to differentiate between admin and regular users
    role: {
      type: String,
      enum: ["admin", "user"], // Admin or regular user
      default: "user", // Default to 'user'
    },
  },
  {
    timestamps: true,
  }
);

const User = models.User || model("User", UserSchema);

export default User;
