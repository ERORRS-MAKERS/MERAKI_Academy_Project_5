const express = require("express");
const usersRouter = express.Router();

// import functions
const {
  register,
  login,
  doctorLogin,
  pharmacistLogin,
  guestLogin,
} = require("../controllers/users");

// End points
usersRouter.post("/register", register);
usersRouter.post("/login", login);
usersRouter.post("/doctor/login", doctorLogin);
usersRouter.post("/pharmacist/login", pharmacistLogin);
usersRouter.post("/guest/login", guestLogin);

module.exports = usersRouter;
