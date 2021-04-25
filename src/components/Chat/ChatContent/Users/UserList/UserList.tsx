import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../../../../redux/usersSlice";
import { CurrentUser } from "../../../../../types/currentUser";
import { UserListProps } from "../../../../../types/props/userListProps";
import { RootState } from "../../../../../types/state/rootState";
import Card from "../../../../common/Card/Card";
import Loader from "../../../../common/Loader/Loader";
import style from "./UserList.module.css";

const UserList: FunctionComponent<UserListProps> = ({filterName}: UserListProps) => {
  const dispatch = useDispatch();
  const userType = useSelector((state: RootState)  => state.authentication.currentUser?.userType);
  const users = useSelector((state: RootState) => state.users.users)?.filter((user: CurrentUser) => user.name.includes(filterName));
  
  useEffect(() => {
    !users && dispatch(fetchUsers(userType!));
  }, []);
  
  return (
    <div className={style.userList}>
      <div className={style.scrollBlock}>
        {users ?
          users.map((user: CurrentUser) => <Card key={user._id} id={user._id} fullName={user.name} photoUrl={user.photo} workWith={user.workWith}/>) : <Loader />}
      </div>
    </div>
  )
}

export default UserList;
