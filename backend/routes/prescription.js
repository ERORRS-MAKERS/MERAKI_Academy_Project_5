const express = require('express');

const {
  getAllPrescription,
  SendPrescriptionRequest,
  updatePrescriptionStatus,
  getPrescriptionByNationalId,
} = require('../controllers/prescription');

const prescriptionRouter = express.Router();

prescriptionRouter.get('/:id', getAllPrescription);
prescriptionRouter.get('/search_1/:patientid', getPrescriptionByNationalId);
prescriptionRouter.post('/', SendPrescriptionRequest);
prescriptionRouter.put('/search/:id', updatePrescriptionStatus);

module.exports = prescriptionRouter;
