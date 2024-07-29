import axios from 'axios';

export const bookAppointment = async (user_id, department_id, time, notes) => {
  try {
    const response = await axios.post('http://127.0.0.1:5000/appointments/', {
      user_id,
      department_id,
      time,
      notes,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
