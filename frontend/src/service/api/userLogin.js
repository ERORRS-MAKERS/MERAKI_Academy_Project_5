import axios from "axios";

export const userLogin = async (email, password) => {
  try {
    const response = await axios.post("http://localhost:5000/users/login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const doctorLogin = async (email, password) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/users/doctor/login",
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
      "http://localhost:5000/users/pharmacist/login",
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
      "http://localhost:5000/users/guest/login",
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
