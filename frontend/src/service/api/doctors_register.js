import axios from 'axios';

export const DoctorsRegister = async (data) => {
  try {
    const response = await axios.post('http://127.0.0.1:5000/doctors/', data);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
