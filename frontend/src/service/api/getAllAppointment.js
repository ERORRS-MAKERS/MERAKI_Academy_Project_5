import axios from 'axios';

export const getTotalAppointments = async (department_id) => {
  try {
    const response = await axios.get(
      `https://prohealth-errors-maker-team.onrender.com/appointments/total/month`
    );
    return response.data.result;
  } catch (error) {
    console.log(error);
  }
};
