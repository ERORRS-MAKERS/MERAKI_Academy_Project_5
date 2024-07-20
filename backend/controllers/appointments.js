const pool = require('../models/db');

const updateAppointmentById = (req, res) => {
  const id = req.params.id;
  let { time } = req.body;

  const query = `UPDATE appointments SET time = COALESCE($1,time) WHERE id=$2 RETURNING *;`;
  const data = [time || null, id];

  pool
    .query(query, data)
    .then((result) => {
      if (result.rows.length !== 0) {
        res.status(200).json({
          success: true,
          message: `Appointments with id: ${id} updated successfully`,
          result: result.rows[0],
        });
      } else {
        throw new Error('Error happened while updating article');
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

module.exports = { updateAppointmentById };
