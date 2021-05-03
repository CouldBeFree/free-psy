import React, { FunctionComponent, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Respondents from "./Respondents/Respondents";
import Messenger from "./Messenger/Messenger";
import style from "./ChatRoom.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../types/state/rootState";
import { fetchUsers } from "../../../../redux/usersSlice";


const ChatRoom: FunctionComponent = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const userType = useSelector((state: RootState)  => state.authentication.currentUser?.userType);
  const users = useSelector((state: RootState) => state.users.users);
  const currentRespondent = useSelector((state: RootState) => state.respondent.currentRespondent);

  
  useEffect(() => {
    userType && dispatch(fetchUsers(userType));
  }, []);

  useEffect(() => {
    users && history.push(`${history.location.pathname}/${users[0]._id}`)
  }, [users]);

  return (
    <div className={style.chatRoom}>
      {users && <Respondents users={users}/>}
      {currentRespondent && <Messenger currentRespondent={currentRespondent}/>}
    </div>
  )
}

export default ChatRoom

