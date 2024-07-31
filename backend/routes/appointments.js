const express = require('express');

const {
  updateAppointmentById,
  getAllAppointments,
  addNewAppointments,
  getAllAppointmentsByUserId,
} = require('../controllers/appointments');

const appointmentsRouter = express.Router();

appointmentsRouter.put('/:id', updateAppointmentById);
appointmentsRouter.get('/:id', getAllAppointmentsByUserId);
appointmentsRouter.get('/', getAllAppointments);
appointmentsRouter.post('/', addNewAppointments);
module.exports = appointmentsRouter;
