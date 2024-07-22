const express = require('express');

const { getAllPrescription } = require('../controllers/prescription');

const prescriptionRouter = express.Router();

prescriptionRouter.get('/:id', getAllPrescription);

module.exports = prescriptionRouter;