const express = require("express");
const usersRouter = express.Router();

// import functions
const { register, login, doctorLogin } = require("../controllers/users");

// End points
usersRouter.post("/register", register);
usersRouter.post("/login", login);
usersRouter.post("/doctor/login", doctorLogin)

module.exports = usersRouter;