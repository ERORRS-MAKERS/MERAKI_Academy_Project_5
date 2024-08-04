import axios from 'axios';

export const updateAppointment = async (appointment_id, new_time) => {
  try {
    const response = await axios.put(
      `http://127.0.0.1:5000/appointments/${appointment_id}`,
      { time: new_time }
    );
    console.log(response);

    return response.data.result;
  } catch (error) {
    console.log(error);
  }
};
