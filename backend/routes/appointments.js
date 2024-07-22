const express = require('express');

const { updateAppointmentById,getAllAppointments } = require('../controllers/appointments');

const appointmentsRouter = express.Router();

appointmentsRouter.put('/:id', updateAppointmentById);
appointmentsRouter.get('/',getAllAppointments)
module.exports = appointmentsRouter;