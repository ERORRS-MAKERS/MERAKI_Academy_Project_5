const express = require("express");
const {
  getAllReports,
  createMedicalReport,
  getReportsByNationalId,
  getReportsByUserId,
  getReportsByDoctorId,
} = require("../controllers/reportcontrollers");
const reportRouter = express.Router();

reportRouter.get("/", getAllReports);
reportRouter.post("/", createMedicalReport);
reportRouter.get("/:national_id", getReportsByNationalId);
reportRouter.get("/user/:user_id", getReportsByUserId);
reportRouter.get("/doctor/:doctor_id", getReportsByDoctorId);

module.exports = reportRouter;
