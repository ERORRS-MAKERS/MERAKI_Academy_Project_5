const express = require('express');
require('dotenv').config();
const cors = require('cors');
require('./models/db');
require('./socketServer/index');

//routers
const app = express();
const appointmentsRouter = require('./routes/appointments');
const prescriptionRouter = require('./routes/prescription');
const usersRouter = require('./routes/users');
const reportRouter = require('./routes/report');
const doctorsRouter = require('./routes/doctors');
const departmentsRouter = require('./routes/departments');
const doctorReqRouter = require('./routes/doctorReq');
const blogRouter = require('./routes/blog');
//built-in middleware
app.use(express.json());
app.use(cors());

app.use('/appointments', appointmentsRouter);
app.use('/prescription', prescriptionRouter);
app.use('/doctors', doctorsRouter);
app.use('/users', usersRouter);
app.use('/reports', reportRouter);
app.use('/departments', departmentsRouter);
app.use('/doctors_request', doctorReqRouter);
app.use('/blog', blogRouter);
app.use('*', (req, res) => {
  res.status(404).json('No Content at this path');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});
