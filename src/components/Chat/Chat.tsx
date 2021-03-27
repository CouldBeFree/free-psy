import React from "react";
import style from "./Chat.module.css";
import ChatContent from "./ChatContent/ChatContent";
import ChatHeader from "./ChatHeader/ChatHeader";
import ChatNavigation from "./ChatNavigation/ChatNavigation";

const Chat = () => {
  return (
    <div className={style.chatBlock}>
      <ChatHeader />
      <ChatNavigation />
      <ChatContent />
      123
    </div>
  )
}

export default Chat;
