const express = require('express');
const {
  addNewDoctor,
  getAllDoctors,
  updateDoctorById,
  deleteDoctorById,
} = require('../controllers/doctors');

const doctorsRouter = express.Router();

doctorsRouter.post('/', addNewDoctor);
doctorsRouter.get('/', getAllDoctors);
doctorsRouter.put('/:id', updateDoctorById);
doctorsRouter.delete('/:id', deleteDoctorById);

module.exports = doctorsRouter;
