/*
localhost:8000/product, post
localhost:8000/product, get

localhost:8000/product/:id, get
localhost:8000/product/:id, patch
localhost:8000/product/:id, delete
*/

import { Router } from "express";

const productRoutes = Router();

productRoutes
  .route("/")
  .post((req, res, next) => {
    res.json("Product created successfully");
  })
  .get((req, res, next) => {});

productRoutes
  .route("/:id")
  .get((req, res, next) => {})
  .patch((req, res, next) => {})
  .delete((req, res, next) => {});

export default productRoutes;
