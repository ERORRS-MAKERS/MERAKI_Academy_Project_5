import axios from 'axios';

export const DoctorsRegister = async (data) => {
  try {
    const response = await axios.post(
      'https://prohealth-errors-maker-team.onrender.com/doctors/',
      data
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
