const pool = require('../models/db');

const updateAppointmentById = (req, res) => {
  const id = req.params.id;
  let { time } = req.body;

  const query = `UPDATE appointments SET time = COALESCE($1) WHERE id=$2 RETURNING *;`;
  const data = [time, id];

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
const getAllAppointments = (req, res) => {

  pool
    .query('SELECT * FROM appointments ')
    .then((result) => {
      res.status(200).json({
        success: true,
        message: 'all appointments',
        result: result.rows
      })
    }).catch((error) => {
      res.status(500).json({
        success: false,
        message: 'server error',
        error: error.message
      })
    })

}

module.exports = { updateAppointmentById, getAllAppointments };
