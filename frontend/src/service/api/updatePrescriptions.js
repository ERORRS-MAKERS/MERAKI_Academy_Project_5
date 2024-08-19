import axios from 'axios';

export const updatePrescriptions = async (prescription_id, status_updated) => {
  try {
    const response = await axios.put(
      `https://prohealth-errors-maker-team.onrender.com/prescription/search/${prescription_id}`,
      { status: status_updated }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
