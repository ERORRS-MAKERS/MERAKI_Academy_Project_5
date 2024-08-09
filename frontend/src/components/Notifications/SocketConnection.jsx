import React, { useState, useEffect } from "react";
import socketInit from "../../service/socket/socketServer";
import UserNotify from "./UserNotify";

import { useDispatch ,useSelector} from "react-redux";
import { setNotification } from "../../service/redux/reducers/auth/index";

const Connection = () => {
  const dispatch=useDispatch()
  const user_id = useSelector((store) => store.auth.userId);
  const token = useSelector((store) => store.auth.token);
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [show, setShow] = useState(false);
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

  const handleToggle=()=>{
    setShow(!show)
 } 

  return (
    <>
  {showNotification && <div>
      

      <div
        className={`offcanvas offcanvas-end ${showNotification ? 'show' : ''}`}
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        style={{ visibility: showNotification ? 'visible' : 'hidden', opacity: showNotification ? 1 : 0, transition: 'visibility 0.3s, opacity 0.3s' }}
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Notification</h5>
          <button
            type="button"
            className="btn-close text-reset"
            onClick={()=>{
              handleToggle()
              dispatch(setNotification())}}
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
        {isConnected && <UserNotify socket={socket} user_id={user_id} />}
        </div>
      </div>
    </div>}</>
  );
};

export default Connection;
