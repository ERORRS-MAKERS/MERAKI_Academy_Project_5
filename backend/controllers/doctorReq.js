const pool = require("../models/db");

const doctorSendRequest = async (req, res) => {
    const { user_id, department_id, test, status, doctor_id } = req.body;


    pool
        .query(`INSERT INTO doctors_request (user_id, department_id, test, status, doctor_id) VALUES ($1,$2,$3, $4,$5) RETURNING *`, [user_id, department_id, test, status, doctor_id])
        .then((result) => {
            res.status(201).json({
                success: true,
                message: 'Report sent successfully',
                result: result.rows[0],
            });

        })
        .catch((error) => {
            res.status(500).json({
                success: false,
                message: 'server error',
                error: error.message
            })
        })
};
const getAllRequests = (req, res) => {
    const departmentId = req.params.id;
    pool
        .query('SELECT * FROM doctors_request WHERE department_id = $1',
            [departmentId])
        .then((result) => {
            res.status(200).json({
                success: true,
                message: "All Department Request",
                result: result.rows
            })
        })
        .catch((error) => {
            res.status(500).json({
                success: false,
                message: "server Error",
                error: error.message
            })
        })
}
module.exports = {
    doctorSendRequest,
    getAllRequests
};