import React, { FunctionComponent, useEffect, useState } from 'react';
import { useSelector } from "react-redux";

import { socket } from "../../../../../../services/socketService";
import { MessengerProps } from "../../../../../../types/props/messengerProps";
import { RootState } from "../../../../../../types/state/rootState";
import style from "./TopLiner.module.css"

const TopLiner: FunctionComponent<MessengerProps> = ({currentRespondent}: MessengerProps) => {

  const currentUserName = useSelector((state: RootState) => state.authentication.currentUser?.name);
  const status = useSelector((state: RootState) => state.users.usersStatus?.some(respondent => respondent.userId === currentRespondent?._id));
  const [typingStatus, setTypingStatus] = useState("");
  let typingTimer: ReturnType<typeof setTimeout>;

  const onUserTyping = (issuerInfo: {from: string, to: string}): void => {
    if (currentRespondent.name === issuerInfo.from &&
      currentUserName === issuerInfo.to) {
        clearTimeout(typingTimer);
        setTypingStatus("typing...");
        typingTimer = setTimeout(() => {
          setTypingStatus("");
        }, 1000);
    }
  }
  
  useEffect(() => {
    socket.on("userTyping", onUserTyping)
    return () => {
      socket.off("userTyping", onUserTyping)
    }
  }, [currentRespondent.name]);

  return (
    <div className={style.info}>
      <p className={style.name}>{currentRespondent?.name}</p>
      <p className={style.status}>{typingStatus ? typingStatus : status ? 'Онлайн' : "Офлайн"}</p>
    </div>
  )
}

export default TopLiner;
