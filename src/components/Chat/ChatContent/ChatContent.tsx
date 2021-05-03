import React, { FunctionComponent } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import style from "./ChatContent.module.css";
import ChatRoom from "./ChatRoom/ChatRoom";
import Profile from "./Profile/Profile";
import Users from "./Users/Users";

const ChatContent: FunctionComponent = () => {
  return (
    <div className={style.chatContentBlock}>
      <Switch>
        <Route exact path="/chat/users" render={() => <Users />} />
        <Route exact path="/chat/profile/:userId?" render={() => <Profile />} />
        <Route exact path="/chat/:userId?" render={() => <ChatRoom />} />
        <Redirect from="*" to="/chat" />
      </Switch>
    </div>
  )
}

export default ChatContent;
