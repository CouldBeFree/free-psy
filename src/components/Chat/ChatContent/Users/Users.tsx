import React, { FunctionComponent } from 'react';
import Searcher from "../../../common/Searcher/Searcher";
import UserList from "./UserList/UserList";
import style from "./Users.module.css";

const Users: FunctionComponent = () => {
  return (
    <div className={style.usersBlock}>
      <Searcher headline="Пошук користувача" placeholder="введіть ім'я чи псевдонім"/>
      <UserList />
    </div>
  )
}

export default Users;
