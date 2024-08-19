import axios from 'axios';

export const getDoctorRequests = async (department_id) => {
  try {
    const response = await axios.get(
      `https://prohealth-errors-maker-team.onrender.com/doctors_request/Department_Request/${department_id}`
    );
    return response.data.result;
  } catch (error) {
    console.log(error);
  }
};
