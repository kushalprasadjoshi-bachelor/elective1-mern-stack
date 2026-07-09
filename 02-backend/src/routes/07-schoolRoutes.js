import { Router } from "express";
import School from "../schema/03-schoolSchema.js";

const schoolRoutes = Router();

schoolRoutes
  .route("/")
  .post(async (req, res, next) => {
    try {
      let result = await School.create(req.body);

      res.json({
        success: true,
        message: "School created successfully!",
        reuslt: result,
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
      let result = await School.find();

      res.json({
        success: true,
        message: "Schools fetched successfully!",
        reuslt: result,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  });

schoolRoutes
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      let result = await School.findById(req.params.id);

      res.json({
        success: true,
        message: "School fetched successfully!",
        reuslt: result,
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
      let result = await School.findByIdAndUpdate(req.params.id, req.body);

      res.json({
        success: true,
        message: "School updated successfully!",
        reuslt: result,
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
      let result = await School.findByIdAndDelete(req.params.id);

      res.json({
        success: true,
        message: "School deleted successfully",
        reuslt: result,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  });

export default schoolRoutes;
