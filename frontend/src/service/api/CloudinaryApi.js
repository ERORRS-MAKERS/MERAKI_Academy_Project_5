import axios from 'axios';
const getImgUrl = async (data) => {
  try {
    const response = axios.post(
      'https://api.cloudinary.com/v1_1/dkr5xxdly/image/upload',
      data
    );
    return (await response).data.url;
  } catch (error) {
    throw error.response.data;
  }
};

const getCvUrl = async (data2) => {
  try {
    const response = axios.post(
      'https://api.cloudinary.com/v1_1/dkr5xxdly/image/upload',
      data2
    );
    return (await response).data.url;
  } catch (error) {
    throw error.response.data;
  }
};

export { getImgUrl, getCvUrl };
