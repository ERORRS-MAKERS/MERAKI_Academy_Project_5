import axios from "axios";


export const userInfo= async (national_id)=>{

    try {
      const response = await axios.get(`http://localhost:5000/reports/${national_id}`)
      return response.data.result[0];
    } catch (error) {
      console.log(error)
    }
   /* axios
      .get(`http://localhost:5000/reports/${national_id}`)
      .then((result) => {
        console.log(result);
        return (result.data.result[0])
      /*   setUserData(result.data.result[0]);

        setUser_id(result.data.result[0].id); 
      })
      .catch((err) => {
        console.log(err.message);
      });*/
} 