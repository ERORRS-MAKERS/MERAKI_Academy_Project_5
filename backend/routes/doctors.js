const express = require('express');
const {
  addNewDoctor,
  getAllDoctors,
  updatedoctorById,
  deleteDoctorById,
} = require('../controllers/doctors');

const doctorsRouter = express.Router();

doctorsRouter.post('/', addNewDoctor);
doctorsRouter.get('/', getAllDoctors);
doctorsRouter.put('/:id', updatedoctorById);
doctorsRouter.delete('/:id', deleteDoctorById);

module.exports = doctorsRouter;
