const express = require("express");
const {
    addNewDoctor,
    getAllDoctors,
} = require("../controllers/doctors");


const doctorsRouter=express.Router()

doctorsRouter.post("/",addNewDoctor)
doctorsRouter.get("/",getAllDoctors)



module.exports=doctorsRouter