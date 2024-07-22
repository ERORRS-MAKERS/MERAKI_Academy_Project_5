const express =require("express")
const {getAllReports,createMedicalReport}=require("../controllers/reportcontrollers")
const reportRouter=express.Router()

reportRouter.get("/",getAllReports)
reportRouter.post("/",createMedicalReport)
module.exports=reportRouter;