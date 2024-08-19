import axios from 'axios';

const updateRequest = async (id, status) => {
  try {
    const response = await axios.put(
      `https://prohealth-errors-maker-team.onrender.com/doctors/${id}`,
      {
        is_hired: status,
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export default updateRequest;
