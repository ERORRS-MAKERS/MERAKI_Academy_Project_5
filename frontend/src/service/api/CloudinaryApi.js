import axios from "axios";

export const getImgUrl = async (data) => {
  try {
    const response = axios.post("https://api.cloudinary.com/v1_1/dkr5xxdly/image/upload",data)
    return (await response).data.url;
  } catch (error) {
    throw error.response.data;
  }
};

    