const pool = require("../models/db");

const addNewDepartment = (req, res) => {
  const { name, description } = req.body;

  const query = `INSERT INTO departments (name, description) VALUES ($1,$2)`;
  const data = [name, description];
  pool
    .query(query, data)
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "Department added successfully",
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server Error",
        err: err.message,
      });
    });
};

const getAllDepartment = (req, res) => {
  const query = `SELECT * FROM departments WHERE is_deleted=0;`;

  pool
    .query(query)
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "All departments",
        result: result.rows,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server error",
        err: err.message,
      });
    });
};

const updateDepartmentById = (req, res) => {
  const id = req.params.id;
  let { name, description } = req.body;

  const query = `UPDATE departments SET 
  name = COALESCE ($1,name),
    description = COALESCE($2, description)
  WHERE id=$3 AND is_deleted = 0  RETURNING *;
   `;

  const data = [name, description, id];

  pool
    .query(query, data)
    .then((result) => {
      if (result.rows.length === 0) {
        return res.status(404).json({
          success: false,
          message: `Department with id: ${id} not found`,
        });
      }

      res.status(200).json({
        success: true,
        message: `Department with id: ${id} updated successfully`,
        doctor: result.rows[0],
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server error",
        err: err.message,
      });
    });
};

module.exports = {
  addNewDepartment,
  getAllDepartment,
  updateDepartmentById,
};
