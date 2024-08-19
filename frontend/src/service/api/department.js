import axios from 'axios';

export const departmentLoader = async () => {
  const results = axios.get(
    'https://prohealth-errors-maker-team.onrender.com/departments'
  );
  return { results };
};
