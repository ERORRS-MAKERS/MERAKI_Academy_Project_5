import axios from 'axios';

export const addNewDepartment = async (
  department_name,
  department_description,
  department_imgurl
) => {
  try {
    const response = await axios.post(
      'https://prohealth-errors-maker-team.onrender.com/departments',
      {
        department_name,
        department_description,
        department_imgurl,
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
