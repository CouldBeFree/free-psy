import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchMessages, setCurrentRespondent } from "../../../../../../redux/respondentSlice";
import { RespondentProps } from "../../../../../../types/props/respondentProps";
import { RootState } from "../../../../../../types/state/rootState";
import style from "./Respondent.module.css";

const Respondent: FunctionComponent<RespondentProps> = ({user}: RespondentProps) => {

  const currentRespondentName = useSelector((state: RootState) => state.respondent.currentRespondent?.name);
  const status = useSelector((state: RootState) => state.users.usersStatus?.some(respondent => respondent.userId === user._id));
  
  const dispatch = useDispatch();
  const onRespondentClick = () => {
    dispatch(setCurrentRespondent(user));
    if (currentRespondentName !== user.name) {
      dispatch(fetchMessages(user.name));
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
          <p className={style.lastMessage}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p className={style.messageTime}>{status ? 'Online' : "Offline"}</p>
        </div>
      </div>
    </div>
  )
}

export default Respondent;
