import axios from 'axios';

export const usersLoader = async () => {
  const results = await axios.get('http://127.0.0.1:5000/users/userstotal');
  return { results };
};

export const doctorsLoader = async () => {
  const results = await axios.get('http://127.0.0.1:5000/doctors');
  return { results };
};
