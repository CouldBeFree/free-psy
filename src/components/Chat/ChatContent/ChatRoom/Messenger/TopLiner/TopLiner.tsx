import React, { FunctionComponent, useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { socket } from "../../../../../../services/socketService";
import { MessengerProps } from "../../../../../../types/props/messengerProps";
import { RootState } from "../../../../../../types/state/rootState";
import style from "./TopLiner.module.css"

const TopLiner: FunctionComponent = () => {
  
  const currentRespondent = useSelector((state: RootState) => state.respondent.currentRespondent);
  console.log('render', currentRespondent)
  const status = useSelector((state: RootState) => state.users.usersStatus?.some(respondent => respondent.userId === currentRespondent?._id));
  const [typingStatus, setTypingStatus] = useState("");
  // let typingTimer: ReturnType<typeof setTimeout>;

const onUserTyping = (userId: string): void => {
    console.log(currentRespondent?._id, '----', userId)

    if(currentRespondent?._id === userId) {
      console.log('currentRespondent is typing ..............', typingStatus)
      // clearTimeout(typingTimer);
      setTypingStatus("typing...");
      // typingTimer = setTimeout(() => {
      //   console.log('clear time out')
      //   setTypingStatus("");
      // }, 1000);
    }
  }
  
  useEffect(() => {
    socket.on("userTyping", onUserTyping)
    return () => {
      socket.off("userTyping", onUserTyping)
    }
  }, []);

  return (
    <div className={style.info}>
      <p className={style.name}>{currentRespondent?.name}</p>
      <p className={style.status}>{typingStatus ? typingStatus : status ? 'Online' : "Offline"}</p>
    </div>
  )
}

export default TopLiner;
