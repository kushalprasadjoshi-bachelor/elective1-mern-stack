import { Router } from "express";
import Student from "../schema/studentSchema.js";

const studentRoutes = Router();

studentRoutes
  .route("/")
  .post(async (req, res, next) => {
    try {
      let result = await Student.create(req.body);

      res.json({
        success: true,
        message: "Student created successfully!",
        result: result,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
  })
  .get(async (req, res, next) => {
    try {
      let result = await Student.find();

      res.json({
        success: true,
        message: "Students fetched successfully!",
        result: result,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
  });

studentRoutes
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      let result = await Student.findById(req.params.id);

      res.json({
        success: true,
        message: "Student fetched successfully!",
        result: result,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
  })
  .patch(async (req, res, next) => {
    try {
      let result = await Student.findByIdAndUpdate(req.params.id, req.body);

      res.json({
        success: true,
        message: "Student updated successfully!",
        result: result,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
  })
  .delete(async (req, res, next) => {
    try {
      let result = await Student.findByIdAndDelete(req.params.id);

      res.json({
        success: true,
        message: "Student deleted successfully!",
        result: result,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
  });

export default studentRoutes;

/* 
ERROR TACKLING QUESTION:

Job.findByIdAndDelete(req.params.id)

*/
