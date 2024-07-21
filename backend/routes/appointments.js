const express = require('express');

const { updateAppointmentById } = require('../controllers/appointments');

const appointmentsRouter = express.Router();

appointmentsRouter.put('/:id', updateAppointmentById);

module.exports = appointmentsRouter;
