import axios from 'axios';

export const userPrescriptionLoader = async ({ params }) => {
  const { userId } = params;
  const results = axios.get(
    `https://prohealth-errors-maker-team.onrender.com/prescription/${userId}`
  );
  return { results };
};
