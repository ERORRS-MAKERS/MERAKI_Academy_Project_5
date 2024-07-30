import axios from "axios";

export const SendForDepartments = async (test,department_id,user_id,doctor_id) => {
  try {
    const response = await axios.post("http://127.0.0.1:5000/doctors_request", {
      test,
      department_id,
      user_id,
      doctor_id,
      status:false
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
