const express = require("express");
const {
  addNewDepartment,
  getAllDepartment,
  updateDepartmentById,
} = require("../controllers/departments");

const departmentsRouter = express.Router();

departmentsRouter.post("/", addNewDepartment);
departmentsRouter.get("/", getAllDepartment);
departmentsRouter.put("/:id", updateDepartmentById);

module.exports = departmentsRouter;
