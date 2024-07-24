const express=require("express");

const {doctorSendRequest,getAllRequests}=require("../controllers/doctorReq")

const doctorReqRouter=express.Router();

doctorReqRouter.post('/',doctorSendRequest);
doctorReqRouter.get('/Department_Request/:id',getAllRequests)
module.exports=doctorReqRouter;