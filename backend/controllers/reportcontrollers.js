const pool = require("../models/db");

const getAllReports = (req, res) => {
  pool
    .query(`SELECT * FROM medical_reports `)
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "All The Reports",
        result: result.rows,
      });
    })
   .catch((error) => {
      res.status(500).json({
        success: false,
        message: "Server Error",
        error: error.message,
      });
      console.log(error);
    });
};

   
 

const createMedicalReport=(req,res)=>{
    const { user_id, doctor_id,title,description,image_url,time} = req.body;
   
    const query = `INSERT INTO medical_reports (user_id, doctor_id,title,description,image_url,time) VALUES ($1,$2,$3,$4,$5,$6)`;
    const data = [
        user_id,
        doctor_id,
        title,
        description,
        image_url,
        time,
    ];
    
    pool
      .query(query, data)
      .then((result) => {
        res.status(200).json({
          success: true,
          message: 'report created successfully',
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: 'Server Error',
          err:err.message
        });
      });
}

module.exports={
    getAllReports,
    createMedicalReport

};
