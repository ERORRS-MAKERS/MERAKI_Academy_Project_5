const express = require('express');

const {
  getAllPrescription,
  SendPrescriptionRequest,
} = require('../controllers/prescription');

const prescriptionRouter = express.Router();

prescriptionRouter.get('/:id', getAllPrescription);
prescriptionRouter.post('/', SendPrescriptionRequest);

module.exports = prescriptionRouter;
