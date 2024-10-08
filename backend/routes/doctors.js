const express = require("express");
const {
  addNewDoctor,
  getAllDoctors,
  updateDoctorById,
  deleteDoctorById,
  getDoctorsByStatusOfHiring,
  addNewpharmacist,
} = require("../controllers/doctors");

const doctorsRouter = express.Router();

doctorsRouter.post('/', addNewDoctor);
doctorsRouter.get('/', getAllDoctors);
doctorsRouter.put('/:id', updateDoctorById);
doctorsRouter.delete('/:id', deleteDoctorById);
doctorsRouter.get('/hiring/:is_hired',getDoctorsByStatusOfHiring)
doctorsRouter.post("/add/pharmacist", addNewpharmacist);


module.exports = doctorsRouter;
