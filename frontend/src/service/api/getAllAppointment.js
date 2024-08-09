import axios from 'axios';

export const getTotalAppointments = async (department_id) => {
  try {
    const response = await axios.get(
      `http://127.0.0.1:5000/appointments/total/month`
    );
    return response.data.result;
  } catch (error) {
    console.log(error);
  }
};
