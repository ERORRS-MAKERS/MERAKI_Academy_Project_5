import axios from 'axios';

export const userRegister = async (
  username,
  password,
  first_name,
  last_name,
  age,
  email
) => {
  try {
    const response = await axios.post('http://localhost:5000/users/register', {
      username,
      password,
      first_name,
      last_name,
      age,
      email,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
