const express = require('express');
const {
  getAllReports,
  createMedicalReport,
  getReportsByNationalId,
  getReportsByUserId,
} = require('../controllers/reportcontrollers');
const reportRouter = express.Router();

reportRouter.get('/', getAllReports);
reportRouter.post('/', createMedicalReport);
reportRouter.get('/:national_id', getReportsByNationalId);
reportRouter.get('/user/:user_id', getReportsByUserId);
module.exports = reportRouter;
