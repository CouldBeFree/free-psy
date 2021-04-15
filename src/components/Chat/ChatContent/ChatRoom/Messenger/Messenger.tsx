import React, { FunctionComponent } from "react";
import Message from "./Message/Message";
import style from "./Messenger.module.css";
import Sender from "./Sender/Sender";

const Messenger: FunctionComponent = () => {


  return (
    <div className={style.messengerBlock}>
      <div className={style.respondentenInfo}>
        <div className={style.avatar}></div>
        <div className={style.info}>
          <p className={style.name}>Анастасія Вітровська</p>
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
