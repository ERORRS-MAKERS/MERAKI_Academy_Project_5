const pool = require('../models/db');
const bcrypt = require('bcryptjs');

const addNewDoctor = async (req, res) => {
  const {
    doctor_name,
    email,
    password,
    specialist,
    description,
    department_id,
    img_url,
    cv_url,
  } = req.body;

  try {
    const encryptedPassword = await bcrypt.hash(password, 10);
    const query = `
      INSERT INTO doctors
      (doctor_name, department_id, specialist, description, email, password, img_url, cv_url)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`;

    const data = [
      doctor_name,
      department_id,
      specialist,
      description,
      email.toLowerCase(),
      encryptedPassword,
      img_url,
      cv_url,
    ];

    await pool.query(query, data);
    res.status(200).json({
      success: true,
      message: 'Doctor account created successfully',
    });
  } catch (err) {
    res.status(409).json({
      success: false,
      message: 'The email already exists',
      err,
    });
  }
};

const getAllDoctors = (req, res) => {
  const query = `SELECT  doctors.*,  departments.department_name FROM doctors 
JOIN departments  ON doctors.department_id = departments.id
WHERE doctors.is_deleted=0;`;

  pool
    .query(query)
    .then((result) => {
      res.status(200).json({
        success: true,
        message: 'All doctors',
        result: result.rows,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: 'Server error',
        err: err,
      });
    });
};

const updateDoctorById = (req, res) => {
  const id = req.params.id;
  let { name, department_id, specialist, description } = req.body;

  const query = `UPDATE doctors SET 
  name = COALESCE ($1,name),
  department_id = COALESCE($2, department_id),
  specialist = COALESCE($3, specialist),
  description = COALESCE($4, description)
  WHERE id=$5 AND is_deleted = 0  RETURNING *;
   `;

  const data = [name, department_id, specialist, description, id];

  pool
    .query(query, data)
    .then((result) => {
      if (result.rows.length === 0) {
        return res.status(404).json({
          success: false,
          message: `Doctor with id: ${id} not found`,
        });
      }

      res.status(200).json({
        success: true,
        message: `Doctor with id: ${id} updated successfully`,
        doctor: result.rows[0],
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: 'Server error',
        err: err.message,
      });
    });
};

const deleteDoctorById = (req, res) => {
  const id = req.params.id;
  const query = `UPDATE doctors SET is_deleted=1 WHERE id=$1;`;
  const data = [id];
  pool
    .query(query, data)
    .then((result) => {
      if (result.rowCount !== 0) {
        res.status(200).json({
          success: true,
          message: `Doctor with id: ${id} deleted successfully`,
        });
      } else {
        throw new Error('Error happened while deleting article');
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: 'Server error',
        err: err,
      });
    });
};

const getDoctorsByStatusOfHiring = (req, res) => {
  const status = req.body.is_hired;
  const query = `SELECT *
   FROM doctors
   WHERE is_hired=($1)`;
  const data = [status];

  pool
    .query(query, data)
    .then((result) => {
      if (result.rows.length !== 0) {
        res.status(200).json({
          success: true,
          message: `The Doctors with is_hired: ${status}`,
          result: result.rows,
        });
      } else {
        throw new Error('There is No job requests');
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: 'Server error',
        err: err.message,
      });
    });
};

module.exports = {
  addNewDoctor,
  getAllDoctors,
  updateDoctorById,
  deleteDoctorById,
  getDoctorsByStatusOfHiring,
};
