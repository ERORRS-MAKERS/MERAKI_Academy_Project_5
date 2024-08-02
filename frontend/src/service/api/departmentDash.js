 import axios from "axios";
import { useSelector } from "react-redux";

export const departmentDashLoader = async ()=>{
    const results = axios.get(`http://127.0.0.1:5000/doctors_request/Department_Request/2`);
console.log(results);
    return {results};

    }