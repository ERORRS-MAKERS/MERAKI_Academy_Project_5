const express = require('express');

const {
  updateAppointmentById,
  getAllAppointments,
  addNewAppointments,
} = require('../controllers/appointments');

const appointmentsRouter = express.Router();

appointmentsRouter.put('/:id', updateAppointmentById);
appointmentsRouter.get('/', getAllAppointments);
appointmentsRouter.post('/', addNewAppointments);
module.exports = appointmentsRouter;
