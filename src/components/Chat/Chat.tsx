import React, { FunctionComponent, useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearState } from "../../redux/usersSlice";
import style from "./Chat.module.css";
import ChatContent from "./ChatContent/ChatContent";
import ChatHeader from "./ChatHeader/ChatHeader";
import ChatNavigation from "./ChatNavigation/ChatNavigation";

const Chat: FunctionComponent = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearState());
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
