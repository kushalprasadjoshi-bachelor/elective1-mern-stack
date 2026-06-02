import { Schema, model } from "mongoose";

let userSchema = Schema({
  name: {
    type: String,
    required: [true, "User name is required"],
  },
  address: {
    type: String,
    required: [true, "User address is required"],
  },
  email: {
    type: String,
    required: [true, "User email is required"],
  },
  password: {
    type: String,
    required: [true, "User password is required"],
  },
  phone: {
    type: Number,
    required: [true, "User phone number is required"],
  },
});

let User = model("User", userSchema);

export default User;
