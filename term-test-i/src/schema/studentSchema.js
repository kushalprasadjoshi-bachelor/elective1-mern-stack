import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Student name is required."],
  },
  email: {
    type: String,
    required: [true, "Student email is required."],
    unique: true,
  },
  rollNumber: {
    type: Number,
    required: [true, "Student roll number is required."],
    unique: true,
  },
  course: [
    {
      type: String,
      required: [true, "Student course is required."],
    },
  ],
  semester: {
    type: String,
    required: [true, "Student semester is required."],
  },
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
