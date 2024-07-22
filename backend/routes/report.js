const express =require("express")
const {getAllReports,createMedicalReport,getReportsByNationalId}=require("../controllers/reportcontrollers")
const reportRouter=express.Router()

reportRouter.get("/",getAllReports)
reportRouter.post("/",createMedicalReport)
reportRouter.get("/:national_id",getReportsByNationalId)
module.exports=reportRouter;