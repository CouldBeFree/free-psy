import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import style from "./ChatNavigation.module.css";

const ChatNavigation: FunctionComponent = () => {
  return (
    <div className={style.chatNavigation}>
      <div className={style.iconBlock}>
        <NavLink exact to="/chat" className={style.icon} activeClassName={style.active}>
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 0H3C1.3125 0 0 1.35938 0 3V16.5C0 18.1875 1.3125 19.5 3 19.5H7.5V23.4375C7.5 23.9062 8.01562 24.1875 8.39062 23.9062L14.25 19.5H21C22.6406 19.5 24 18.1875 24 16.5V3C24 1.35938 22.6406 0 21 0Z" fill="#517361"/>
          </svg>
        </NavLink>
      </div>
      <div className={style.iconBlock}>
        <NavLink to="/chat/users" className={style.icon} activeClassName={style.active}>
          <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 9.5C6.14062 9.5 7.5 8.1875 7.5 6.5C7.5 4.85938 6.14062 3.5 4.5 3.5C2.8125 3.5 1.5 4.85938 1.5 6.5C1.5 8.1875 2.8125 9.5 4.5 9.5ZM25.5 9.5C27.1406 9.5 28.5 8.1875 28.5 6.5C28.5 4.85938 27.1406 3.5 25.5 3.5C23.8125 3.5 22.5 4.85938 22.5 6.5C22.5 8.1875 23.8125 9.5 25.5 9.5ZM27 11H24C23.1562 11 22.4062 11.375 21.8438 11.8906C23.7656 12.9219 25.0781 14.7969 25.4062 17H28.5C29.2969 17 30 16.3438 30 15.5V14C30 12.3594 28.6406 11 27 11ZM15 11C17.8594 11 20.25 8.65625 20.25 5.75C20.25 2.89062 17.8594 0.5 15 0.5C12.0938 0.5 9.75 2.89062 9.75 5.75C9.75 8.65625 12.0938 11 15 11ZM18.5625 12.5H18.1875C17.2031 12.9688 16.125 13.25 15 13.25C13.8281 13.25 12.75 12.9688 11.7656 12.5H11.3906C8.39062 12.5 6 14.9375 6 17.9375V19.25C6 20.5156 6.98438 21.5 8.25 21.5H21.75C22.9688 21.5 24 20.5156 24 19.25V17.9375C24 14.9375 21.5625 12.5 18.5625 12.5ZM8.10938 11.8906C7.54688 11.375 6.79688 11 6 11H3C1.3125 11 0 12.3594 0 14V15.5C0 16.3438 0.65625 17 1.5 17H4.54688C4.875 14.7969 6.1875 12.9219 8.10938 11.8906Z" fill="#517361"/>
          </svg>
        </NavLink>
      </div>
      <div className={style.iconBlock}>
        <NavLink to="/chat/profile" className={style.icon} activeClassName={style.active}>
          <svg width="24" height="8" viewBox="0 0 24 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.375 4C15.375 2.17188 13.8281 0.625 12 0.625C10.125 0.625 8.625 2.17188 8.625 4C8.625 5.875 10.125 7.375 12 7.375C13.8281 7.375 15.375 5.875 15.375 4ZM20.25 0.625C18.375 0.625 16.875 2.17188 16.875 4C16.875 5.875 18.375 7.375 20.25 7.375C22.0781 7.375 23.625 5.875 23.625 4C23.625 2.17188 22.0781 0.625 20.25 0.625ZM3.75 0.625C1.875 0.625 0.375 2.17188 0.375 4C0.375 5.875 1.875 7.375 3.75 7.375C5.57812 7.375 7.125 5.875 7.125 4C7.125 2.17188 5.57812 0.625 3.75 0.625Z" fill="#517361"/>
          </svg>
        </NavLink>
      </div>
    </div>
  )
}

export default ChatNavigation;
