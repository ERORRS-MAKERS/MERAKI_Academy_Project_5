import axios from 'axios';

export const usersLoader = async () => {
  const results = await axios.get(
    'https://prohealth-errors-maker-team.onrender.com/users/userstotal'
  );
  return { results };
};

export const doctorsLoader = async () => {
  const results = await axios.get(
    'https://prohealth-errors-maker-team.onrender.com/doctors'
  );
  return { results };
};
