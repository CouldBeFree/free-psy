import React, { FunctionComponent, useEffect, useState } from 'react';
import Respondents from "./Respondents/Respondents";
import Messenger from "./Messenger/Messenger";
import style from "./ChatRoom.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../types/state/rootState";
import { fetchUsers } from "../../../../redux/usersSlice";

const ChatRoom: FunctionComponent = () => {

  const dispatch = useDispatch();
  const userType = useSelector((state: RootState)  => state.authentication.currentUser?.userType);
  const users = useSelector((state: RootState) => state.users.users);
  
  useEffect(() => {
    dispatch(fetchUsers(userType!));
  }, []);

  return (
    <div className={style.chatRoom}>
      <Respondents users={users!}/>
      <Messenger />
    </div>
  )
}

export default ChatRoom

