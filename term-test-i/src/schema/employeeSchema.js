import mongoose from "mongoose";

const employeeSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "User name is required."],
  },
  email: {
    type: String,
    required: [true, "User email is required."],
    unique: true,
  },
  department: {
    type: String,
    required: [true, "User department is required."],
  },
  position: {
    type: String,
    required: [true, "User position is required."],
  },
  salary: {
    type: Number,
    required: [true, "User salary is required."],
  },
});

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;
