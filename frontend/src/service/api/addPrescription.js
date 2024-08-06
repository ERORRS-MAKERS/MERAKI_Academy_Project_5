import axios from 'axios';

export const addPrescriptions = async (data) => {
  try {
    const response = await axios.post(
      `http://127.0.0.1:5000/prescription/`,
      data
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
