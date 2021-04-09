import React, { FunctionComponent } from 'react';
import Respondents from "./Respondents/Respondents";
import Messenger from "./Messenger/Messenger";
import style from "./ChatRoom.module.css";

const ChatRoom: FunctionComponent = () => {
  return (
    <div className={style.chatRoom}>
      <Respondents />
      <Messenger />
    </div>
  )
}

export default ChatRoom
