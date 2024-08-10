const pool = require('../models/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { response } = require('express');
const saltRounds = parseInt(process.env.SALT);
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const register = async (req, res) => {
  const { username, password, first_name, last_name, age, email } = req.body;
  const patientId = Math.floor(100000 + Math.random() * 900000);
  const role_id = 1;
  const lowerEmail = email.toLowerCase();
  const encryptedPassword = await bcrypt.hash(password, saltRounds);

  const query = `INSERT INTO users ( username	, patientId, password, first_name, last_name, age, email, role_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)`;
  const data = [
    username,
    patientId,
    encryptedPassword,
    first_name,
    last_name,
    age,
    lowerEmail,
    role_id,
  ];

  pool
    .query(query, data)
    .then((result) => {
      res.status(200).json({
        success: true,
        message: 'Account created successfully',
      });
    })
    .catch((err) => {
      res.status(409).json({
        success: false,
        message: 'The email already exists',
        err,
      });
    });
};

const login = (req, res) => {
  const { password, email } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Email and password are required',
    });
  }

  const query = `
  SELECT users.*, roles.role 
  FROM users 
  JOIN roles ON users.role_id = roles.id 
  WHERE email = $1
`;
  const data = [email.toLowerCase()];
  pool
    .query(query, data)
    .then((result) => {
      if (result.rows.length) {
        bcrypt.compare(password, result.rows[0].password, (err, response) => {
          if (err) res.json(err);
          if (response) {
            const payload = {
              userId: result.rows[0].id,
              country: result.rows[0].country,
              role: result.rows[0].role,
            };
            const options = { expiresIn: '1d' };
            const secret = process.env.SECRET;
            const token = jwt.sign(payload, secret, options);
            if (token) {
              return res.status(200).json({
                token,
                success: true,
                message: `Valid login credentials`,
                userId: result.rows[0].id,

                role: result.rows[0].role,
                patientId:result.rows[0].patientid

              });
            } else {
              throw Error;
            }
          } else {
            res.status(403).json({
              success: false,
              message: `The email doesn’t exist or the password you’ve entered is incorrect`,
            });
          }
        });
      } else throw Error;
    })
    .catch((err) => {
      res.status(403).json({
        success: false,
        message:
          'The email doesn’t exist or the password you’ve entered is incorrect',
        err,
      });
    });
};

const doctorLogin = (req, res) => {
  const { password, email } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Email and password are required',
    });
  }

  const query = `SELECT * FROM doctors WHERE email = $1`;
  const data = [email.toLowerCase()];
  pool
    .query(query, data)
    .then((result) => {
      if (result.rows.length) {
        bcrypt.compare(password, result.rows[0].password, (err, response) => {
          if (err) res.json(err);
          if (response) {
            const payload = {
              doctorId: result.rows[0].id,
              doctorName: result.rows[0].doctor_name,
              specialist: result.rows[0].specialist,
            };
            const options = { expiresIn: '1d' };
            const secret = process.env.SECRET;
            const doctorToken = jwt.sign(payload, secret, options);
            if (doctorToken) {
              return res.status(200).json({
                doctorToken,
                success: true,
                message: `Valid login credentials`,
                doctorId: result.rows[0].id,
                departmentId: result.rows[0].department_id,
              });
            } else {
              throw Error;
            }
          } else {
            res.status(403).json({
              success: false,
              message: `The email doesn’t exist or the password you’ve entered is incorrect`,
            });
          }
        });
      } else throw Error;
    })
    .catch((err) => {
      res.status(403).json({
        success: false,
        message:
          'The email doesn’t exist or the password you’ve entered is incorrect',
        err,
      });
    });
};

const pharmacistLogin = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Email and password are required',
    });
  }
  const query = `SELECT * FROM pharmacy WHERE email = $1`;
  const data = [email.toLowerCase()];

  pool
    .query(query, data)
    .then((result) => {
      if (result.rows.length) {
        bcrypt.compare(password, result.rows[0].password, (err, response) => {
          if (err) res.json(err);
          if (response) {
            const payload = {
              pharmacistId: result.rows[0].id,
              pharmacistName: result.rows[0].pharmacist_name,
              // country: result.rows[0].country,
              // role: result.rows[0].role_id,
            };
            const options = { expiresIn: '1d' };
            const secret = process.env.SECRET;
            const pharmacisttoken = jwt.sign(payload, secret, options);
            if (pharmacisttoken) {
              return res.status(200).json({
                pharmacisttoken,
                success: true,
                message: `Valid login credentials`,
                pharmacistId: result.rows[0].id,
              });
            } else {
              throw Error;
            }
          } else {
            res.status(403).json({
              success: false,
              message: `The email doesn’t exist or the password you’ve entered is incorrect`,
            });
          }
        });
      } else throw Error;
    })
    .catch((err) => {
      res.status(403).json({
        success: false,
        message:
          'The email doesn’t exist or the password you’ve entered is incorrect',
        err,
      });
    });
};

const getUserDetails = (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM users WHERE id=($1)`;
  pool
    .query(query, [id])
    .then((result) => {
      res.status(200).json({
        success: true,
        message: `user ${id} details`,
        result: result.rows[0],
      });
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: 'server error',
        error: error.message,
      });
    });
};

const getAllUser = (req, res) => {
  const query = `SELECT * FROM users`;
  pool
    .query(query)
    .then((result) => {
      res.status(200).json({
        success: true,
        message: `user details`,
        result: result.rows,
      });
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: 'server error',
        error: error.message,
      });
    });
};

const googleLogin = async (req, res) => {
  const { token } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const email = payload.email.toLowerCase();
    const first_name = payload.given_name;
    const last_name = payload.family_name;
    const userame = payload.name;

    const userCheck = await pool.query('SELECT * FROM users WHERE email = $1', [
      email,
    ]);

    if (userCheck.rows.length > 0) {
      const user = userCheck.rows[0];
      return res.status(200).json({
        success: true,
        message: 'Login successful',
        user: {
          id: user.id,
          username: user.username || `${first_name}.${last_name}`,
          email: user.email,
          firstName: user.first_name,
          lastName: user.last_name,
          patientId: user.patientid,
        },
      });
    }

    const role_id = 1;
    const encryptedPassword = await bcrypt.hash('defaultPassword', saltRounds);

    const newUserQuery = `INSERT INTO users (username, patientID, password, first_name, last_name, age, email, role_id)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING id, username, first_name, last_name, email`;

    const newUserData = [
      `${firstName}.${lastName}`,
      Math.floor(100000 + Math.random() * 900000),
      encryptedPassword,
      firstName,
      lastName,
      null,
      email,
      role_id,
    ];

    const newUser = await pool.query(newUserQuery, newUserData);

    res.status(200).json({
      success: true,
      message: 'Account created successfully',
      user: {
        id: newUser.rows[0].id,
        username: newUser.rows[0].username,
        email: newUser.rows[0].email,
        firstName: newUser.rows[0].first_name,
        lastName: newUser.rows[0].last_name,
        patientId: newUser.rows[0].patientid,
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Google login failed',
      error: err.message,
    });
  }
};

module.exports = {
  register,
  login,
  doctorLogin,
  getUserDetails,
  pharmacistLogin,
  getAllUser,
  googleLogin,
};
