import React, { FunctionComponent } from "react";
import { Route } from "react-router-dom";
import style from "./ChatContent.module.css";
import ChatRoom from "./ChatRoom/ChatRoom";
import Profile from "./Profile/Profile";
import Searcher from "./Searcher/Searcher";

const ChatContent: FunctionComponent = () => {
  return (
    <div className={style.chatContentBlock}>
      <Route exact path="/chat" render={() => <ChatRoom />} />
      <Route path="/chat/search" render={() => <Profile />} />
      <Route path="/chat/profile" render={() => <Searcher />} />
    </div>
  )
}

export default ChatContent;
