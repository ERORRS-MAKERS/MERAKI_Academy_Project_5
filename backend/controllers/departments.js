const pool =require("../models/db")


const addNewDepartment =  (req, res) => {
    const { name, description } = req.body;
   
    const query = `INSERT INTO departments (name, description) VALUES ($1,$2)`;
    const data = [
      name,
      description,
    ];
    pool
      .query(query, data)
      .then((result) => {
        res.status(200).json({
          success: true,
          message: 'Department added successfully',
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: 'Server Error',
          err:err.message
        });
      });
  };




  module.exports={
    addNewDepartment
   
  }