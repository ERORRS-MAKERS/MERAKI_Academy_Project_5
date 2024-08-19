import axios from 'axios';

export const SendReport = async (
  title,
  description,
  user_id,
  doctor_id,
  image_url
) => {
  try {
    const response = await axios.post(
      'https://prohealth-errors-maker-team.onrender.com/reports',
      {
        title,
        description,
        user_id,
        doctor_id,
        image_url,
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
