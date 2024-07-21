const express = require("express");
const usersRouter = express.Router();

// import functions
const { register, login } = require("../controllers/users");

// End points
usersRouter.post("/register", register);
usersRouter.post("/login", login);

module.exports = usersRouter;
