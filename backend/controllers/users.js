const pool = require("../models/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
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

module.exports = {
  register,
};
