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
