import axios from 'axios';

export const getAppointmentsForToday = async (id) => {
  try {
    const response = await axios.get(
      `https://prohealth-errors-maker-team.onrender.com/appointments/search/today/${id}`
    );
    return response.data.result;
  } catch (error) {
    console.log(error);
  }
};
