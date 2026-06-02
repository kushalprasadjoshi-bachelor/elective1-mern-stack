/*
- Make routes
- Use that routes at index.js
*/

import { Router } from "express";

let firstRoute = Router();

/*
> localhost:8000, post => "a",
> localhost:8000, get => "b",
> localhost:8000/job, get => "c",
*/
firstRoute
  .route("/")
  .post((req, res, next) => {
    console.log("a");
  })
  .get((req, res, next) => {
    console.log("b");
  });

// Changing URLs
firstRoute.route("/job").get((req, res, next) => {
  console.log("c");
});

export default firstRoute;
