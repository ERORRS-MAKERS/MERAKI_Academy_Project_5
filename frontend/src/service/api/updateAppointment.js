import axios from 'axios';

export const updateAppointment = async (appointment_id, new_time) => {
  try {
    const response = await axios.put(
      `https://prohealth-errors-maker-team.onrender.com/appointments/${appointment_id}`,
      { time: new_time }
    );
    console.log(response);

    return response.data.result;
  } catch (error) {
    console.log(error);
  }
};
