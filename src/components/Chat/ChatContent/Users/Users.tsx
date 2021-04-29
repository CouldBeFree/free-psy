import React, { FunctionComponent, useState } from 'react';
import Searcher from "../../../common/Searcher/Searcher";
import UserList from "./UserList/UserList";
import style from "./Users.module.css";

const Users: FunctionComponent = () => {

  const [filterName, setFilterName] = useState<string>('');

  return (
    <div className={style.usersBlock}>
      <Searcher setFilterName={setFilterName} headline="Пошук користувача" placeholder="введіть ім'я чи псевдонім"/>
      <UserList filterName={filterName}/>
    </div>
  )
}

export default Users;
