import axios from "axios";

export const addNewDepartment = async (department_name,department_description,department_imgurl) => {
  try {
    const response = await axios.post("http://127.0.0.1:5000/departments", {
        department_name,
        department_description,
        department_imgurl,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
