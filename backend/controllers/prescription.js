const pool = require('../models/db');

const getAllPrescription = (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM prescription WHERE user_id = $1;`;
  const data = [id];

  pool
    .query(query, data)
    .then((result) => {
      res.status(200).json({
        success: true,
        message: 'All the prescription',
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

const SendPrescriptionRequest = (req, res) => {
  const { doctor_id, user_id, pharmacist_id, title, description, quantity } =
    req.body;

  const query = `INSERT INTO prescription
   (doctor_id, user_id, pharmacist_id, title, description, quantity)
    VALUES ($1,$2,$3,$4,$5,$6) RETURNING *;`;

  const data = [
    doctor_id,
    user_id,
    pharmacist_id,
    title,
    description,
    quantity,
  ];

  pool
    .query(query, data)
    .then((result) => {
      res.status(200).json({
        success: true,
        message: 'Prescription created successfully',
        result: result.rows[0],
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

module.exports = { getAllPrescription, SendPrescriptionRequest };
