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
    const response = await axios.post(
      'https://prohealth-errors-maker-team.onrender.com/appointments/',
      {
        user_id,
        department_id,
        time,
        notes,
      }
    );

    const userDetails = await axios.get(
      `https://prohealth-errors-maker-team.onrender.com/users/${user_id}`
    );
    let name = userDetails.data.result.first_name;
    let email = userDetails.data.result.email;

    SendEmail(department_name, time, name, email);

    SendEmail(department_name, time, name, email);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
