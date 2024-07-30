const express = require('express');
const {
  addNewDoctor,
  getAllDoctors,
  updateDoctorById,
  deleteDoctorById,
  getDoctorsByStatusOfHiring
} = require('../controllers/doctors');

const doctorsRouter = express.Router();

doctorsRouter.post('/', addNewDoctor);
doctorsRouter.get('/', getAllDoctors);
doctorsRouter.put('/:id', updateDoctorById);
doctorsRouter.delete('/:id', deleteDoctorById);
doctorsRouter.get('/hiring_status',getDoctorsByStatusOfHiring)

module.exports = doctorsRouter;
