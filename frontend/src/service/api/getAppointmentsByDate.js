import axios from 'axios';

export const getAppointmentsForToday = async () => {
  try {
    const response = await axios.get(
      `http://127.0.0.1:5000/appointments/search/today`
    );
    return response.data.result;
  } catch (error) {
    console.log(error);
  }
};
