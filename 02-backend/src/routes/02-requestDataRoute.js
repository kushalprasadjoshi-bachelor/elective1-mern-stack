import { Router } from "express";

let requestDataRoute = Router();

requestDataRoute
  .route("/data")
  .get((req, res, next) => {
    console.log(req.body); // We can access the data sent from postman in req.body
    console.log("a");
  })


export default requestDataRoute;