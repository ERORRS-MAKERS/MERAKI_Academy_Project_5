import axios from 'axios';

export const getDoctorsHiringRequests = async (is_hired) => {
  try {
    const response = await axios.get(
      `https://prohealth-errors-maker-team.onrender.com/doctors/hiring/${is_hired}`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
