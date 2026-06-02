import { Router } from "express";

let dynamicParameterRoute = Router();

dynamicParameterRoute
  .route("/data/:id")
  .get((req, res, next) => {
    console.log(req.params.id); // We can access the dynamic parameter from the URL
    /*
    - To get the dynamic parameters, we can use req.params. 
        It is an object that contains all the dynamic parameters from the URL. 
        The keys of the object are the parameter names and the values are the parameter values.

    - To get the dynamic parameter, we can use req.params.<parameter_name>. In this case, the parameter name is "id".
    */
    console.log("a");
  });

export default dynamicParameterRoute;