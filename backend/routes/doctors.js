const express = require("express");
const {
  addNewDoctor,
  getAllDoctors,
  updatedoctorById,
} = require("../controllers/doctors");

const doctorsRouter = express.Router();

doctorsRouter.post("/", addNewDoctor);
doctorsRouter.get("/", getAllDoctors);
doctorsRouter.put("/:id", updatedoctorById);

module.exports = doctorsRouter;
