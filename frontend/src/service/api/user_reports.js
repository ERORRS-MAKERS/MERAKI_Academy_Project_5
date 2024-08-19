import axios from 'axios';

export const userReportsLoader = async ({ params }) => {
  const { userId } = params;
  const results = axios.get(
    `https://prohealth-errors-maker-team.onrender.com/reports/user/${userId}`
  );
  return { results };
};
