import React, { FunctionComponent } from 'react';
import UserList from "./UserList/UserList";
import Messenger from "./Messenger/Messenger";
import style from "./ChatRoom.module.css";

const ChatRoom: FunctionComponent = () => {
  return (
    <div className={style.chatRoom}>
      <UserList />
      <Messenger />
    </div>
  )
}

export default ChatRoom
