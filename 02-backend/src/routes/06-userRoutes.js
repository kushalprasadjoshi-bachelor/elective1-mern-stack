/*
localhost:8000/user, post
localhost:8000/user, get

localhost:8000/user/:id, get
localhost:8000/user/:id, patch
localhost:8000/user/:id, delete
*/

import { Router } from "express";
import User from "../schema/01-userSchema.js";

const userRoutes = Router();

userRoutes
  .route("/") // localhost:8000/user
  .post(async (req, res, next) => {
    /*
    1. Send data from postman
    2. Access that data here
    3. Save that data in User table in the database
    */
    try {
      let result = await User.create(req.body);

      res.json({
        success: true,
        message: "User created successfully",
        result: result,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  })
  .get(async (req, res, next) => {
    try {
      let result = await User.find();

      res.json({
        success: true,
        message: "User fetched successfully",
        result: result,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  });

userRoutes
  .route("/:id") // localhost:8000/user/:id
  .get(async (req, res, next) => {
    try {
      let result = await User.findById(req.params.id);

      res.json({
        success: true,
        message: "User fetched successfully",
        result: result,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  })
  .patch(async (req, res, next) => {
    try {
      let result = await User.findByIdAndUpdate(req.params.id, req.body);

      res.json({
        success: true,
        message: "User updated successfully",
        result: result,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  })
  .delete(async (req, res, next) => {
    try {
      let result = await User.findByIdAndDelete(req.params.id);

      res.json({
        success: true,
        message: "User deleted successfully",
        result: result,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  });

export default userRoutes;
