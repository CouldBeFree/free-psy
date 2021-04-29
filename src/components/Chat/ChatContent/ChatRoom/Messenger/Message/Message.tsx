import classNames from "classnames";
import React, { FunctionComponent } from 'react';
import { useSelector } from "react-redux";
import { timeConverter } from "../../../../../../services/timeConverterService";
import { MessageProps } from "../../../../../../types/props/messageProps";
import { RootState } from "../../../../../../types/state/rootState";
import style from "./Message.module.css";

const Message: FunctionComponent<MessageProps> = ({message, respondentPhoto}: MessageProps) => {

  const currentUserName = useSelector((state: RootState) => state.authentication.currentUser?.name);
  const currentUserPhoto = useSelector((state: RootState) => state.authentication.currentUser?.photo);

  const isOwner = (message.from === currentUserName);

  return (
    <div className={classNames(style.messageBlock, {
        [style.reverse]: isOwner,
        [style.primaryColor]: isOwner
      })}>
      <div className={classNames(style.avatarBlock, {
        [style.primaryBackgroundColor]: isOwner
      })}>
        {isOwner && currentUserPhoto && <img className={style.avatar} src={currentUserPhoto}/>}
        {respondentPhoto && <img className={style.avatar} src={respondentPhoto}/>}
      </div>
      <div className={style.writingBlock}>
        <p className={classNames(style.writing, {
          [style.flexEnd]: isOwner
        })}>
          {message.message}
        </p>
        <div className={classNames(style.sendingInformation, {
          [style.reverse]: isOwner
        })}>
          <p className={style.time}>{timeConverter(message.time)}</p>
          <div className={style.status}>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.8359 4.60156L11.8984 3.6875C11.6875 3.45312 11.3125 3.45312 11.1016 3.6875L5.5 9.28906L2.875 6.6875C2.66406 6.45312 2.3125 6.45312 2.07812 6.6875L1.16406 7.60156C0.929688 7.83594 0.929688 8.1875 1.16406 8.39844L5.10156 12.3359C5.3125 12.5703 5.66406 12.5703 5.875 12.3359L12.8125 5.39844C13.0469 5.1875 13.0469 4.83594 12.8359 4.60156ZM5.21875 7.08594C5.35938 7.25 5.61719 7.25 5.75781 7.08594L10.6328 2.21094C10.7734 2.07031 10.7734 1.83594 10.6328 1.67188L9.57812 0.617188C9.41406 0.476562 9.17969 0.476562 9.03906 0.617188L5.5 4.17969L4.1875 2.86719C4.04688 2.72656 3.8125 2.72656 3.67188 2.86719L2.59375 3.92188C2.45312 4.08594 2.45312 4.32031 2.59375 4.46094L5.21875 7.08594Z" fill="#517361" fillOpacity="0.59"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Message;
