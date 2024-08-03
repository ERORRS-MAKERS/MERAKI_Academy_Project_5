const pool = require("../models/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { response } = require("express");
const saltRounds = parseInt(process.env.SALT);

const register = async (req, res) => {
  const { username, national_id, password, first_name, last_name, age, email } =
    req.body;

  const role_id = 1;

  const encryptedPassword = await bcrypt.hash(password, saltRounds);

  const query = `INSERT INTO users ( username	, national_id, password, first_name, last_name, age, email, role_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)`;
  const data = [
    username,
    national_id,
    encryptedPassword,
    first_name,
    last_name,
    age,
    email.toLowerCase(),
    role_id,
  ];

  pool
    .query(query, data)
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "Account created successfully",
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

const login = (req, res) => {
  const { password, email } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required",
    });
  }

  const query = `SELECT * FROM users WHERE email = $1`;
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
              role: result.rows[0].role_id,
            };
            const options = { expiresIn: "1d" };
            const secret = process.env.SECRET;
            const token = jwt.sign(payload, secret, options);
            if (token) {
              return res.status(200).json({
                token,
                success: true,
                message: `Valid login credentials`,
                userId: result.rows[0].id,
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
          "The email doesn’t exist or the password you’ve entered is incorrect",
        err,
      });
    });
};

const doctorLogin = (req, res) => {
  const { password, email } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required",
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
            const options = { expiresIn: "1d" };
            const secret = process.env.SECRET;
            const doctorToken = jwt.sign(payload, secret, options);
            if (doctorToken) {
              return res.status(200).json({
                doctorToken,
                success: true,
                message: `Valid login credentials`,
                doctorId: result.rows[0].id,
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
          "The email doesn’t exist or the password you’ve entered is incorrect",
        err,
      });
    });
};

const pharmacistLogin = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required",
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
            const options = { expiresIn: "1d" };
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
          "The email doesn’t exist or the password you’ve entered is incorrect",
        err,
      });
    });
};

const guestLogin = (req, res) => {
  const guestCredentials = {
    email: "guest@example.com",
    password: "123456",
  };

  const query = `SELECT * FROM users WHERE email = $1`;
  const data = [guestCredentials.email.toLowerCase()];

  pool
    .query(query, data)
    .then((result) => {
      if (result.rows.length === 0) {
        return res.status(403).json({
          success: false,
          message:
            "The email doesn’t exist or the password you’ve entered is incorrect",
        });
      }
      const user = result.rows[0];

      bcrypt.compare(
        guestCredentials.password,
        user.password,
        (err, isMatch) => {
          if (err || !isMatch) {
            return res.status(403).json({
              success: false,
              message:
                "The email doesn’t exist or the password you’ve entered is incorrect",
            });
          }
          const token = jwt.sign(
            { id: user.id, role: user.role },
            "your_jwt_secret",
            {
              expiresIn: "1h",
            }
          );

          res.json({
            success: true,
            message: "Guest login successful",
            token,
          });
        }
      );
    })
    .catch((err) => {
      res.status(403).json({
        success: false,
        message:
          "The email doesn’t exist or the password you’ve entered is incorrect",
        err,
      });
    });
};

module.exports = {
  register,
  login,
  doctorLogin,
  pharmacistLogin,
  guestLogin,
};
