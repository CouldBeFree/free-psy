import React, { FunctionComponent } from "react";
import { Route } from "react-router-dom";
import style from "./ChatContent.module.css";
import ChatRoom from "./ChatRoom/ChatRoom";
import Profile from "./Profile/Profile";
import Users from "./Users/Users";

const ChatContent: FunctionComponent = () => {
  return (
    <div className={style.chatContentBlock}>
      <Route exact path="/chat" render={() => <ChatRoom />} />
      <Route path="/chat/users" render={() => <Users />} />
      <Route path="/chat/profile/:userId?" render={() => <Profile />} />
    </div>
  )
}

export default ChatContent;
