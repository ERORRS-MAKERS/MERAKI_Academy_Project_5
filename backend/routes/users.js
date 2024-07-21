const express = require("express");
const usersRouter = express.Router();

// import functions
const { register } = require("../controllers/users");

// End points
usersRouter.post("/register", register);

module.exports = usersRouter;
