import React, { useState, useEffect } from "react";

const SendNotify = ({ socket, user_id }) => {
  const [to, setTo] = useState();
  const [message, setMessage] = useState(); 
  const [allMesgs, setAllMesgs] = useState([]);
  const [title,setTitle]=useState()
  

  useEffect(() => {
    socket.on("notification", reciveMsg);
    return () => {
      socket.off("notification", reciveMsg);
    };
  }, [allMesgs]);

  const reciveMsg = (data) => {
    console.log(data);
    setAllMesgs([...allMesgs, data]);
  };
   const sendMessage = () => {
    socket.emit("notification", { to, from:user_id, message,title }); 
  };
  return (
    <>
      <div>Notification</div>
      <input
        type="text"
        placeholder="to"
        onChange={(e) => {
          setTo(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="message"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button onClick={()=>{
        sendMessage()
      }}>send</button> 
<div>console</div>
     {/*  {allMesgs.length > 0 &&
        allMesgs.map((message,i) => {
          return (
            <p key={i}>
              <small>
                To {message.to}:{message.message}{" "}
              </small>
            </p>
          );
        })} */}
    </>
  );
};

export default SendNotify;
