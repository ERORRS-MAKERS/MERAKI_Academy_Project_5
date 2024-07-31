import axios from "axios";

export const getDoctorsHiringRequests = async (is_hired) => {
  try {
    const response = await axios.get(`http://127.0.0.1:5000/doctors/hiring/${is_hired}`);
    console.log(response)
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
