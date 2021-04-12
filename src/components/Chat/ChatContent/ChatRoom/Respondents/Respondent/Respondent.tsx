import React from 'react';
import style from "./Respondent.module.css";

function Corispondent() {
  return (
    <div className={style.respondentBlock}>
      <div className={style.respondentInfo}>
        <div className={style.avatar}>
          <div className={style.messageCounter}>0</div>
        </div>
        <div className={style.textInfo}>
          <p className={style.name}>Катерина Ковач</p>
          <p className={style.lastMessage}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p className={style.messageTime}>11:15</p>
        </div>
      </div>
    </div>
  )
}

export default Corispondent;
