/*
- Make express application.
- Attach code to it.
*/

import express, { application, json } from "express";
import firstRoute from "./src/routes/01-firstRoutes.js";
import requestDataRoute from "./src/routes/02-requestDataRoute.js";
import dynamicParameterRoute from "./src/routes/03-dynamicParameterRoute.js";
import multiDynamicParametersRoute from "./src/routes/04-multiDynamicParametersRoute.js";
import productRoutes from "./src/routes/05-productRoutes.js";
import userRoutes from "./src/routes/06-userRoutes.js";
import mongoose from "mongoose";

let app = express();

app.listen(8000, () => {
  console.log("Application is listening at port 8000");
  mongoose.connect("mongodb://localhost:27017");
});

/*
========== DATABASE OPERATIONS (CRUD) ==========
- Create - POST
- Read - GET
- Update - PATCH
- Delete - DELETE
*/

/*
Question: Print letters a, b, c, d on the console when we hit localhost:8000 
with POST, GET, PATCH and DELETE methods respectively.
    > localhost:8000, post => "a",
    > localhost:8000, get => "b",
    > localhost:8000, patch => "c",
    > localhost:8000, delete => "d"
*/
/*
app.post("/", (req, res, next) => {
  console.log("a");
});

app.get("/", (req, res, next) => {
  console.log("b");
});

app.patch("/", (req, res, next) => {
  console.log("c");
});

app.delete("/", (req, res, next) => {
  console.log("d");
});
*/

/*
// Changing URLs
app.get("/", (req, res, next) => {
  console.log("");
});

app.get("/products", (req, res, next) => {
  console.log("Products");
});

app.get("/products/cars", (req, res, next) => {
  console.log("Cars");
});
*/

/*
NOTES:
- We can have multiple handlers for the same URL and method. They will be executed in the order they are defined.
- We can use next() to move to the next handler.
- index.js is the entry point of our application. We can have multiple files and import them here.
*/

app.use(firstRoute);

app.use(json()); // Makes our backend to take data from postman and use it in our code. It parses the incoming JSON requests and puts the parsed data in req.body.
app.use(requestDataRoute);

// Dynamic parameters in URLs
app.use(dynamicParameterRoute);

// Multiple dynamic parameters in URLs
app.use(multiDynamicParametersRoute);

// Use product routes
app.use("/product", productRoutes);

// Use user routes
app.use("/user", userRoutes);