const express = require("express");
const usersRouter = express.Router();

// import functions

const {
  register,
  login,
  doctorLogin,
  pharmacistLogin,
  getUserDetails,
  getAllUser,
  googleLogin,
} = require("../controllers/users");

// End points
usersRouter.post("/register", register);
usersRouter.post("/login", login);
usersRouter.post("/doctor/login", doctorLogin);
usersRouter.get("/userstotal", getAllUser);
usersRouter.get("/:id", getUserDetails);
usersRouter.post("/pharmacist/login", pharmacistLogin);
usersRouter.post("/google-login", googleLogin);

module.exports = usersRouter;
