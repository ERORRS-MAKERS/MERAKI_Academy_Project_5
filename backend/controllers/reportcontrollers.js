const pool = require('../models/db');

const getAllReports = (req, res) => {
  pool
    .query(`SELECT * FROM medical_reports `)
    .then((result) => {
      res.status(200).json({
        success: true,
        message: 'All The Reports',
        result: result.rows,
      });
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: 'Server Error',
        error: error.message,
      });
      console.log(error);
    });
};

const createMedicalReport = (req, res) => {
  const { user_id, doctor_id, title, description, image_url, time } = req.body;

  const query = `INSERT INTO medical_reports (user_id, doctor_id,title,description,image_url,time) VALUES ($1,$2,$3,$4,$5,$6)`;
  const data = [user_id, doctor_id, title, description, image_url, time];

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
        err: err.message,
      });
    });
};

const getReportsByNationalId = (req, res) => {
  const id = req.params.national_id;
  const query = `SELECT users.first_name,users.last_name,national_id,medical_reports.* 
  FROM medical_reports
  INNER JOIN users ON users.id=medical_reports.user_id WHERE users.national_id=($1)`;
  const data = [id];

  pool
    .query(query, data)
    .then((result) => {
      if (result.rows.length !== 0) {
        res.status(200).json({
          success: true,
          message: `The reports with national_id: ${id}`,
          result: result.rows,
        });
      } else {
        throw new Error('Error happened while getting reports');
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
const getReportsByUserId = (req, res) => {
  const id = req.params.user_id;
  const query = `SELECT doctors.name, medical_reports.title, medical_reports.description,
  medical_reports.image_url, medical_reports.time
   FROM medical_reports
    INNER JOIN doctors ON medical_reports.doctor_id  =  doctors.id WHERE medical_reports.user_id=($1)`;
  const data = [id];

  pool
    .query(query, data)
    .then((result) => {
      if (result.rows.length !== 0) {
        res.status(200).json({
          success: true,
          message: `The reports with user_id: ${id}`,
          result: result.rows,
        });
      } else {
        throw new Error('Error happened while getting reports');
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
  getAllReports,
  createMedicalReport,
  getReportsByNationalId,
  getReportsByUserId,
};
