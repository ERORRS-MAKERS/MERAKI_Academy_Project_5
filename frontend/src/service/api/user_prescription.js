import axios from 'axios';

export const userPrescriptionLoader = async ({ params }) => {
  const { userId } = params;
  const results = axios.get(`http://127.0.0.1:5000/prescription/${userId}`);
  return { results };
};
