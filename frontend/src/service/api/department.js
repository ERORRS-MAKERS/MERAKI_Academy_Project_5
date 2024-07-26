import axios from "axios"

export const departmentLoader = async ()=>{
const results = axios.get("http://127.0.0.1:5000/departments");
return {results}
}