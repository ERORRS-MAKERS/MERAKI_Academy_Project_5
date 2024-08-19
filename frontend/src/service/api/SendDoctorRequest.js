import axios from 'axios';

export const SendForDepartments = async (
  test,
  department_id,
  user_id,
  doctor_id
) => {
  try {
    const response = await axios.post(
      'https://prohealth-errors-maker-team.onrender.com/doctors_request',
      {
        test,
        department_id,
        user_id,
        doctor_id,
        status: false,
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
