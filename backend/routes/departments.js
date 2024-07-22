const express = require("express");
const {
  addNewDepartment,
  getAllDepartment,
} = require("../controllers/departments");

const departmentsRouter = express.Router();

departmentsRouter.post("/", addNewDepartment);
departmentsRouter.get("/", getAllDepartment);

module.exports = departmentsRouter;
