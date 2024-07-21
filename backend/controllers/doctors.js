const pool = require("../models/db");
const bcrypt = require("bcryptjs");

const addNewDoctor = async (req, res) => {
  const { name, department_id, specialist, description, email, password } =
    req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);
  const query = `INSERT INTO doctors (name, department_id, specialist, description, email, password) VALUES ($1,$2,$3,$4,$5,$6)`;
  const data = [
    name,
    department_id,
    specialist,
    description,
    email.toLowerCase(),
    encryptedPassword,
  ];
  pool
    .query(query, data)
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "Doctor account created successfully",
      });
    })
    .catch((err) => {
      res.status(409).json({
        success: false,
        message: "The email already exists",
        err,
      });
    });
};

const getAllDoctors = (req, res) => {
  const query = `SELECT * FROM doctors WHERE is_deleted=0;`;

  pool
    .query(query)
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "All doctors",
        result: result.rows,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server error",
        err: err,
      });
    });
};

module.exports = {
  addNewDoctor,
  getAllDoctors,
};
