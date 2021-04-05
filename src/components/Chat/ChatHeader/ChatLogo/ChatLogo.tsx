import React, { FunctionComponent } from 'react';
import style from "./ChatLogo.module.css";

const ChatLogo: FunctionComponent = () => {
  return (
    <div className={style.logo}>
      <p className={style.icon}>Ψ</p>
      <p className={style.headline}>PsyFree</p>
    </div>
  )
}

export default ChatLogo;
