import React, { FunctionComponent, useEffect } from 'react';
import Respondents from "./Respondents/Respondents";
import Messenger from "./Messenger/Messenger";
import style from "./ChatRoom.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../types/state/rootState";
import { fetchUsers } from "../../../../redux/usersSlice";
import { useHistory } from "react-router";


const ChatRoom: FunctionComponent = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const userType = useSelector((state: RootState)  => state.authentication.currentUser?.userType);
  const users = useSelector((state: RootState) => state.users.users);
  const currentRespondent = useSelector((state: RootState) => state.respondent.currentRespondent);
  
  useEffect(() => {
    if (!users || !users.length) {
      userType && dispatch(fetchUsers(userType));
    }
  }, []);

  useEffect(() => {
    currentRespondent && history.push(`/chat/${currentRespondent._id}`);
  }, [currentRespondent]);

  return (
    <div className={style.chatRoom}>
      {users && <Respondents users={users}/>}
      {currentRespondent && <Messenger currentRespondent={currentRespondent}/>}
    </div>
  )
}

export default ChatRoom

