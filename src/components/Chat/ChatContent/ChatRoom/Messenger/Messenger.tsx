import React, { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../types/state/rootState";
import Message from "./Message/Message";
import style from "./Messenger.module.css";
import Sender from "./Sender/Sender";
import { clearState, fetchMessages } from "../../../../../redux/respondentSlice";
import { MessageInterface } from "../../../../../types/messageInterface";
import { MessengerProps } from "../../../../../types/props/messengerProps";
import TopLiner from "./TopLiner/TopLiner";

const Messenger: FunctionComponent<MessengerProps> = ({currentRespondent}: MessengerProps) => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMessages(currentRespondent.name));
    return () => {
      dispatch(clearState());
    }
  }, []);
  
  const messages = useSelector((state: RootState) => state.respondent.messages);
  const isLoading = useSelector((state: RootState) => state.respondent.isLoading);

  return (
    <div className={style.messengerBlock}>
      <div className={style.respondentenInfo}>
        <div className={style.avatarBlock}>
          {currentRespondent.photo && <img className={style.avatar} src={currentRespondent.photo}/>}
        </div>
        <TopLiner currentRespondent={currentRespondent}/>
      </div>
        <div className={style.correspondence}>
          {!isLoading && messages?.map((message: MessageInterface) => <Message key={message.time} message={message} respondentPhoto={currentRespondent.photo}/>)}
        </div>
      <Sender />
    </div>
  )
}

export default Messenger;
