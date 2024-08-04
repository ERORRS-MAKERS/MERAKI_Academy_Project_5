const express = require("express");
const usersRouter = express.Router();

// import functions
const {
  register,
  login,
  doctorLogin,
  pharmacistLogin,
} = require("../controllers/users");

// End points
usersRouter.post("/register", register);
usersRouter.post("/login", login);
usersRouter.post("/doctor/login", doctorLogin);
usersRouter.post("/pharmacist/login", pharmacistLogin);

module.exports = usersRouter;
