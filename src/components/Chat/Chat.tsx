import React, { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearState, setUsersStatus } from "../../redux/usersSlice";
import style from "./Chat.module.css";
import ChatContent from "./ChatContent/ChatContent";
import ChatHeader from "./ChatHeader/ChatHeader";
import ChatNavigation from "./ChatNavigation/ChatNavigation";
import { RootState } from "../../types/state/rootState";
import { socket } from "../../services/socketService";
import { MessageInterface } from "../../types/messageInterface";
import { setMessage } from "../../redux/respondentSlice";
import { UsersStatus } from "../../types/usersStatus";

const Chat: FunctionComponent = () => {

  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.authentication.currentUser);
  
  const onReceiveMessage = (message: MessageInterface) => {
    dispatch(setMessage({message, addresseeInState: message.from}));
  }
  
  const onReceiveAllUserStatus = (users: UsersStatus[]) => {
    dispatch(setUsersStatus(users));
  }

  useEffect(() => {
    socket.connect();
    socket.emit("user", currentUser);
    socket.on("messageResponse", onReceiveMessage);
    socket.on("onlineUsers", onReceiveAllUserStatus);
    return () => {
      socket.off("messageResponse", onReceiveMessage);
      socket.off("onlineUsers", onReceiveAllUserStatus);
      socket.disconnect();
      dispatch(clearState());
      document.cookie = "token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }, [])

  return (
    <div className={style.chatBlock}>
      <ChatHeader />
      <ChatNavigation />
      <ChatContent />
    </div>
  )
}

export default Chat;
