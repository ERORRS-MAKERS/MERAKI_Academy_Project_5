import axios from 'axios';

export const userLogin = async (email, password) => {
  try {
    const response = await axios.post(
      'https://prohealth-errors-maker-team.onrender.com/users/login',
      {
        email,
        password,
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const doctorLogin = async (email, password) => {
  try {
    const response = await axios.post(
      'https://prohealth-errors-maker-team.onrender.com/users/doctor/login',
      {
        email,
        password,
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const pharmacistLogin = async (email, password) => {
  try {
    const response = await axios.post(
      'https://prohealth-errors-maker-team.onrender.com/users/pharmacist/login',
      {
        email,
        password,
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const guestLogin = async (email, password) => {
  try {
    const response = await axios.post(
      'https://prohealth-errors-maker-team.onrender.com/users/login',
      {
        email: 'guest@example.com',
        password: '123456',
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
