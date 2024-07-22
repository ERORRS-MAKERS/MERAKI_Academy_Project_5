const express = require("express");
const {
  addNewDepartment,
  getAllDepartment,
  updateDepartmentById,
  deleteDepartmentById,
} = require("../controllers/departments");

const departmentsRouter = express.Router();

departmentsRouter.post("/", addNewDepartment);
departmentsRouter.get("/", getAllDepartment);
departmentsRouter.put("/:id", updateDepartmentById);
departmentsRouter.delete("/:id", deleteDepartmentById);


module.exports = departmentsRouter;
