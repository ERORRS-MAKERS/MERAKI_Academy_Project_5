import axios from "axios";

const updateRequest = async (id,status) => {
  try {
    const response = await axios.put(`http://127.0.0.1:5000/doctors/${id}`, {
        is_hired:status
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export default updateRequest