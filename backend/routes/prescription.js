const express = require('express');

const {
  getAllPrescription,
  SendPrescriptionRequest,
  updatePrescriptionStatus,
} = require('../controllers/prescription');

const prescriptionRouter = express.Router();

prescriptionRouter.get('/:id', getAllPrescription);
prescriptionRouter.post('/', SendPrescriptionRequest);
prescriptionRouter.put('/search/:id', updatePrescriptionStatus);

module.exports = prescriptionRouter;
