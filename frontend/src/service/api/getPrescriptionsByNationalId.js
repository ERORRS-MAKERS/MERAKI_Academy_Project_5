import axios from 'axios';

export const prescriptions = async (patientid) => {
  try {
    const response = await axios.get(
      `https://prohealth-errors-maker-team.onrender.com/prescription/search_1/${patientid}`
    );
    return response.data.result;
  } catch (error) {
    console.log(error);
  }
};
