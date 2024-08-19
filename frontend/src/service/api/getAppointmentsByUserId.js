import axios from 'axios';

export const getAppointmentsByUserId = async (userId) => {
  try {
    const response = await axios.get(
      `https://prohealth-errors-maker-team.onrender.com/appointments/${userId}`
    );
    return response.data.result;
  } catch (error) {
    console.log(error);
  }
};
