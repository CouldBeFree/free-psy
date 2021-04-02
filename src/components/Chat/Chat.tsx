import React, { FunctionComponent } from "react";
import style from "./Chat.module.css";
import ChatContent from "./ChatContent/ChatContent";
import ChatHeader from "./ChatHeader/ChatHeader";
import ChatNavigation from "./ChatNavigation/ChatNavigation";

const Chat: FunctionComponent = () => {
  return (
    <div className={style.chatBlock}>
      <ChatHeader />
      <ChatNavigation />
      <ChatContent />
    </div>
  )
}

export default Chat;
