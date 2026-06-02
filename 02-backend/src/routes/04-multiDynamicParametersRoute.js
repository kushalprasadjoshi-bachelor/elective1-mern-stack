import { Router } from "express";

let multiDynamicParametersRoute = Router();

multiDynamicParametersRoute
  .route("/data/:category/:id")
  .get((req, res, next) => {
    const { category, id } = req.params;

    console.log("category:", category);
    console.log("id:", id);

    res.json({
      message: "Multi dynamic parameters route",
      category,
      id,
    });
  });

export default multiDynamicParametersRoute;
