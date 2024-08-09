import axios from "axios";

export const userRegister = async (
  username,
  patientId,
  password,
  first_name,
  last_name,
  age,
  email
) => {
  try {
    const response = await axios.post("http://localhost:5000/users/register", {
      username,
      patientId,
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
