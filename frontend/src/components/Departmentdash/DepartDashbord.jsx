import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const DepartDashbord = ({ id }) => {
  axios
    .get(
      `https://prohealth-errors-maker-team.onrender.com/doctors_request/Department_Request/${id}`
    )
    .then((response) => {
      console.log(response);
    })

    .catch((error) => {
      console.log(error);
    });

  return <div></div>;
};

export default DepartDashbord;
