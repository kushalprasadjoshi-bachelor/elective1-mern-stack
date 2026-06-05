import { model, Schema } from "mongoose";

let schoolSchema = Schema({
  name: {
    type: String,
    required: [true, "School name is mandatory."],
  },
  address: {
    type: String,
    required: [true, "School address is mandatory"],
  },
  phone: {
    type: Number,
    required: [true, "School phone number is mandatory"],
  },
  email: {
    type: String,
    required: [true, "School email is mandatory"],
  },
  noOfRooms: {
    type: Number,
  },
});

let School = model("School", schoolSchema);

export default School;
