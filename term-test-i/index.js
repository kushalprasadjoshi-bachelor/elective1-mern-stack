import express, { json } from "express";
import mongoose from "mongoose";
import employeeRoutes from "./src/routes/employeeRoutes.js";
import bookRoutes from "./src/routes/bookRoutes.js";
import studentRoutes from "./src/routes/studentRoutes.js";

let app = express();

app.listen(8000, () => {
  console.log("application is listening at port 8000");
  mongoose.connect("mongodb://localhost:27017/cosmos");
});

app.use(json());
//makes our backend to take data from postman
// app.use(firstRoute);

/* 
School
  name 
  address
  phone
  email
  noOfRooms



*/

/* 
schema
routes
index

*/

// MY WORK
app.use("/employee", employeeRoutes)
app.use("/book", bookRoutes)
app.use("/student", studentRoutes)
