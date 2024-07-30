import axios from 'axios';

export const prescriptions = async (national_id) => {
  try {
    const response = await axios.get(
      `http://127.0.0.1:5000/prescription/search_1/${national_id}`
    );
    return response.data.result;
  } catch (error) {
    console.log(error);
  }
};
