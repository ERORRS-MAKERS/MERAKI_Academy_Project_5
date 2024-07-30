import axios from 'axios';

export const updatePrescriptions = async (prescription_id, status_updated) => {
  try {
    const response = await axios.put(
      `http://127.0.0.1:5000/prescription/search/${prescription_id}`,
      { status: status_updated }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
