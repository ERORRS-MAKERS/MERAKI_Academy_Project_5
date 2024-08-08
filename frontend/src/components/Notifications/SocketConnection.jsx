import React, { useState, useEffect } from "react";
import socketInit from "../../service/socket/socketServer";
import UserNotify from "./UserNotify";
import { useSelector } from "react-redux";

const Connection = () => {
  const user_id = useSelector((store) => store.auth.userId);
  const token = useSelector((store) => store.auth.token);
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  const { showNotification } = useSelector((state) => {
    return {
      showNotification: state.auth.showNotification,
    };
  });

  useEffect(() => {
    if (!socket) {
      setSocket(socketInit({ user_id, token }));
    }
    socket?.on("connect", () => {
      console.log("hello from frontend");
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
    <>{isConnected && <UserNotify socket={socket} user_id={user_id} />}</>
  );
};

export default Connection;
