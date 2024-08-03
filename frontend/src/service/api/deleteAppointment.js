import axios from 'axios';

export const deleteAppointment = async (appointment_id) => {
  try {
    const response = await axios.delete(
      `http://127.0.0.1:5000/appointments/${appointment_id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
