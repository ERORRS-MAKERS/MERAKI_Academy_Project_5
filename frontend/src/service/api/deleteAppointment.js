import axios from 'axios';

export const deleteAppointment = async (appointment_id) => {
  try {
    const response = await axios.delete(
      `https://prohealth-errors-maker-team.onrender.com/appointments/${appointment_id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
