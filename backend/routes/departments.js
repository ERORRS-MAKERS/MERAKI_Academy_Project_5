const express = require("express");
const { addNewDepartment } = require("../controllers/departments");

const departmentsRouter = express.Router();

departmentsRouter.post("/", addNewDepartment);

module.exports = departmentsRouter;
