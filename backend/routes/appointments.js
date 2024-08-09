const express = require('express');

const {
  updateAppointmentById,
  getAllAppointments,
  addNewAppointments,
  getAllAppointmentsByUserId,
  deleteAppointmentById,
  getAllAppointmentsForToday,
  getAppointmentsTotal,
} = require('../controllers/appointments');

const appointmentsRouter = express.Router();

appointmentsRouter.put('/:id', updateAppointmentById);
appointmentsRouter.delete('/:id', deleteAppointmentById);
appointmentsRouter.get('/:id', getAllAppointmentsByUserId);
appointmentsRouter.get('/', getAllAppointments);
appointmentsRouter.get('/total/month', getAppointmentsTotal);
appointmentsRouter.post('/', addNewAppointments);
appointmentsRouter.get('/search/today/:id', getAllAppointmentsForToday);
module.exports = appointmentsRouter;
