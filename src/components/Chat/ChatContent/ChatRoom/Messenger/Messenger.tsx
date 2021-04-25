import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../types/state/rootState";
import Message from "./Message/Message";
import style from "./Messenger.module.css";
import Sender from "./Sender/Sender";

const Messenger: FunctionComponent = () => {

  const currentRespondent = useSelector((state: RootState) => state.users.currentRespondent);

  return (
    <div className={style.messengerBlock}>
      <div className={style.respondentenInfo}>
        <div className={style.avatar}></div>
        <div className={style.info}>
          <p className={style.name}>{currentRespondent?.name}</p>
          <p className={style.status}>Онлайн</p>
        </div>
      </div>
      <div className={style.correspondence}>
        <Message />
        <Message isOwner={true}/>
        <Message />
        <Message isOwner={true}/>
        <Message />
        <Message isOwner={true}/>
        <Message />
        <Message isOwner={true}/>
      </div>
      <Sender />
    </div>
  )
}

export default Messenger;
