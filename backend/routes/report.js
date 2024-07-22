const express =require("express")
const {getAllReports}=require("../controllers/reportcontrollers")
const reportRouter=express.Router()

reportRouter.get("/",getAllReports)
module.exports=reportRouter;