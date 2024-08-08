import React, { useState, useEffect } from "react";
import socketInit from "../../service/socket/socketServer";
import SendNotify from "./SendNotify";
import { useSelector } from "react-redux";

const DoctorsConnection = () => {
  const user_id = useSelector((store) => store.doctor.doctorId);
  const token = useSelector((store) => store.doctor.doctorToken);
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);


  useEffect(() => {
    if (!socket) {
      setSocket(socketInit({ user_id, token }));
    }
    socket?.on("connect", () => {
      console.log("hello from doctor");
      setIsConnected(true);
    });
    socket?.on("connect_error", (error) => {
      console.log("error", error.message);
      setIsConnected(false);
    });
    return () => {
      socket?.close();
      socket?.removeAllListeners();
      setIsConnected(false);
    };
  }, [socket]);

  return (
    <>
      {isConnected && <SendNotify socket={socket} />}
    </>
  );
};

export default DoctorsConnection;
