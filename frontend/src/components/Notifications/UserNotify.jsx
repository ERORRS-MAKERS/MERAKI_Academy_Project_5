import React, { useState, useEffect } from "react";
import IconBoxStyle11 from "../IconBox/IconBoxStyle11";
import Spacing from "../Spacing";
import { useSelector, useDispatch } from "react-redux";
import { setNotify } from "../../service/redux/reducers/notificationData/index";

const UserNotify = ({ socket, user_id }) => {
  const { notifications } = useSelector((state) => {
    return {
      notifications: state.notification.notifications,
    };
  });
  const dispatch = useDispatch();
  const { showNotification } = useSelector((state) => {
    return {
      showNotification: state.auth.showNotification,
    };
  });

  const [allMesgs, setAllMesgs] = useState([]);

  useEffect(() => {
    socket.on("notification", reciveMsg);
    return () => {
      socket.off("notification", reciveMsg);
    };
  }, [allMesgs]);

  const reciveMsg = (data) => {
    console.log(data);
    setAllMesgs([...allMesgs, data]);
    dispatch(setNotify({allMesgs}));
  };
  return (
    <>
      {showNotification && (
        <>
          <Spacing md="35" lg="35" xl="35" />
          <hr />
          {notifications.length > 0 &&
            notifications.map((message, i) => {
              return (
                <>
                  <Spacing md="30" lg="30" xl="30" />
                  <IconBoxStyle11
                    title={message.title}
                    subTitle={message.message}
                    iconSrc="/images/contact/icon_2.svg"
                  />
                </>
              );
            })}
        </>
      )}
    </>
  );
};

export default UserNotify;
