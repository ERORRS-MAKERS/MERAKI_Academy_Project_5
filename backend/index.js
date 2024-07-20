const express = require('express');
require('dotenv').config();
const cors = require('cors');
require('./models/db');

//routers
const app = express();

const appointmentsRouter = require('./routes/appointments');

//built-in middleware
app.use(express.json());
app.use(cors());

// router middleware

app.use('/appointments', appointmentsRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});
