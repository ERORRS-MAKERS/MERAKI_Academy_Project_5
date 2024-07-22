const express=require("express");

const {doctorSendRequest,getAllRequests}=require("../controllers/doctorReq")

const doctorReqRouter=express.Router();

doctorReqRouter.post('/',doctorSendRequest);
doctorReqRouter.get('',getAllRequests)
module.exports=doctorReqRouter;