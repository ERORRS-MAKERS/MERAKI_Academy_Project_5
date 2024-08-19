import axios from 'axios';

export const addPrescriptions = async (data) => {
  try {
    const response = await axios.post(
      `https://prohealth-errors-maker-team.onrender.com/prescription/`,
      data
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
