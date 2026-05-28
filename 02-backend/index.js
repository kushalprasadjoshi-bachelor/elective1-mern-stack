/*
- Make express application.
- Attach code to it.
*/

import express, { application } from "express";
let app = express();

app.listen(8000, () => {
  console.log("Application is listening at port 8000");
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
