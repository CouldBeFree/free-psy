import React, { FunctionComponent } from "react";
import style from "./ChatHeader.module.css";
import ChatLogo from "./ChatLogo/ChatLogo";
import Logout from "./Logout/Logout";

const ChatHeader: FunctionComponent = () => {
  return (
    <div className={style.chatHeaderBlock}>
      <ChatLogo />
      <Logout />
    </div>
  )
}

export default ChatHeader;
