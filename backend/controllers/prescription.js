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

module.exports = { getAllPrescription };
