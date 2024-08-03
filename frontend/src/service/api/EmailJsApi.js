import axios from 'axios';

export const SendEmail = async () => {
    const service_id='service_c04di8n'
    const template_id='template_jz3ps8j'
    const user_id='ORcuO_fflr_UK8ir2'
    const data = {
        service_id,
        template_id,
        user_id,
        template_params:{
            to_name:'yazan',
            message:'hello from test',
            email:'yazanalshoubaki109@gmail.com'
        }
    }
  try {
    const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data);

console.log(response)
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
