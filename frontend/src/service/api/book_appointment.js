import axios from 'axios';
import { SendEmail } from './EmailJsApi';


export const bookAppointment = async (user_id, department_id, time, notes) => {
  try {
    const response = await axios.post('http://127.0.0.1:5000/appointments/', {
      user_id,
      department_id,
      time,
      notes,
    });
 
 // SendEmail()
  return response.data;

  } catch (error) {
    throw error.response.data;
  }
};
