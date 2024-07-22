const pool =require("../models/db");

const doctorSendRequest = async (req,res)=>{
const { user_id, department_id, test , status,doctor_id}=req.body;


pool
.query(`INSERT INTO doctors_request (user_id, department_id, test, status, doctor_id) VALUES ($1,$2,$3, $4,$5) RETURNING *`,[user_id, department_id, test , status,doctor_id])
.then((result)=>{
        res.status(201).json({
            success: true,
            message: 'Report sent successfully',
            result: result.rows[0],
          });
      
})
.catch((error)=>{
    res.status(500).json({
        success:false, 
        message:'server error',
        error:error.message
    })
})
};
const getAllRequests=(req,res)=>{

}
module.exports={
    doctorSendRequest,
    getAllRequests  
};