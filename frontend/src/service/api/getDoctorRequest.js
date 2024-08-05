import axios from 'axios';

export const getDoctorRequests = async (department_id) => {
  try {
    const response = await axios.get(
      `http://127.0.0.1:5000/doctors_request/Department_Request/${department_id}`
    );
    return response.data.result;
  } catch (error) {
    console.log(error);
  }
};
