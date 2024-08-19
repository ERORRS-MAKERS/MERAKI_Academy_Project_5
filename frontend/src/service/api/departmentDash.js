import axios from 'axios';
import { useSelector } from 'react-redux';

export const departmentDashLoader = async () => {
  const results = axios.get(
    `https://prohealth-errors-maker-team.onrender.com/doctors_request/Department_Request/2`
  );
  console.log(results);
  return { results };
};
