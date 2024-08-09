import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";


const SendNotify = ({ socket }) => {
  const [allMesgs, setAllMesgs] = useState([]);
  const [title,setTitle]=useState()

  const { user_id,time,department_name ,department_id} = useSelector((state) => {
    return {
      user_id: state.notification.user_id,
      time: state.notification.time,
      department_name:state.notification.department_name,
      department_id:state.notification.department_id

    };
  });
  

  useEffect(() => {
    console.log(user_id)
    socket.on("notification", reciveMsg);
    sendMessage()
    
    return () => {
      socket.off("notification", reciveMsg);
    };
  }, []);

  const reciveMsg = (data) => {
    setAllMesgs([...allMesgs, data]);

  };
   const sendMessage = () => {
    console.log(department_name)
    socket.emit("notification", { to:user_id, from:department_id, message:time,title:department_name, }); 
  };
  return (
    <>
     
   
        
      

    </>
  );
};

export default SendNotify;
