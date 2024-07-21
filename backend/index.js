const express = require('express');
require('dotenv').config();
const cors = require('cors');
require('./models/db');

//routers
const app = express();


const doctorsRouter=require("./routes/doctors")







//built-in middleware
app.use(express.json());
app.use(cors());



app.use('/appointments', appointmentsRouter);
app.use('/prescription', prescriptionRouter);
app.use("/doctors",doctorsRouter)









const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});
