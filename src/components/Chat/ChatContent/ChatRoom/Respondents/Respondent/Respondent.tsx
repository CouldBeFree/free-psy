import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchMessages, setCurrentRespondent } from "../../../../../../redux/respondentSlice";
import { lastMessage } from "../../../../../../services/lastMessageService";
import { RespondentProps } from "../../../../../../types/props/respondentProps";
import { RootState } from "../../../../../../types/state/rootState";
import style from "./Respondent.module.css";

const Respondent: FunctionComponent<RespondentProps> = ({user}: RespondentProps) => {

  const dispatch = useDispatch();
  const currentRespondentName = useSelector((state: RootState) => state.respondent.currentRespondent?.name);
  const status = useSelector((state: RootState) => state.users.usersStatus?.some(respondent => respondent.userId === user._id));
  const messages = useSelector((state: RootState) => state.respondent.messages);
  
  const onRespondentClick = () => {
    dispatch(setCurrentRespondent(user));
    if (currentRespondentName !== user.name) {
      if (messages) {
        const fetchedUser = Object.keys(messages).find((respondent: string) => respondent === user.name);
        !fetchedUser && dispatch(fetchMessages(user.name));
      } else {
        dispatch(fetchMessages(user.name));
      }
    }
  }

  return (
    <div className={style.respondentBlock} onClick={onRespondentClick}>
      <div className={style.respondentInfo}>
        <div className={style.avatarBlock}>
          <div className={style.messageCounter}>0</div>
          {user.photo && <img className={style.avatar} src={user.photo} />}
        </div>
        <div className={style.textInfo}>
          <p className={style.name}>{user.name}</p>
          <p className={style.lastMessage}>{lastMessage(messages[user.name], user.name)}</p>
          <p className={style.messageTime}>{status ? 'Online' : "Offline"}</p>
        </div>
      </div>
    </div>
  )
}

export default Respondent;
