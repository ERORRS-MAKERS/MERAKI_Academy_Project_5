import axios from 'axios';
import { SendEmail } from './EmailJsApi';

export const bookAppointment = async (
  user_id,
  department_id,
  time,
  notes,
  department_name
) => {
  try {
    const response = await axios.post('http://127.0.0.1:5000/appointments/', {
      user_id,
      department_id,
      time,
      notes,
    });

    const userDetails = await axios.get(
      `http://127.0.0.1:5000/users/${user_id}`
    );
    let name = userDetails.data.result.first_name;
    let email = userDetails.data.result.email;

    SendEmail(department_name, time, name, email);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
