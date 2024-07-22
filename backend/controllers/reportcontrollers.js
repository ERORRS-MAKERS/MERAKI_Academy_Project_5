
const{pool}=require("../models/db")

const getAllReports=(req, res)=>{
// const quer=`SELECT * FROM medical_reports WHERE user_id AND doctor_id `
pool
.query(`SELECT * FROM medical_reports `)

.then((result)=>{
    res.status(200).json({
        success:true,
        message:"All The Reports",
        result:result.rows
    })
})
.catch((error)=>{
    res.status(500).json({
        success:false,
        message:"Server Error",
        error:error.message
    })
    console.log(error)
})
} 
module.exports={
    getAllReports
};
