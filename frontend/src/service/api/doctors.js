import axios from 'axios';

export const doctorsLoader = async () => {
  const results = axios.get(
    'https://prohealth-errors-maker-team.onrender.com/doctors'
  );
  return { results };
};
