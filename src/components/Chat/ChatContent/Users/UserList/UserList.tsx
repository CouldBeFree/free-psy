import React, { FunctionComponent } from 'react';
import Card from "../../../../common/Card/Card";
import style from "./UserList.module.css";

const UserList: FunctionComponent = () => {
  return (
    <div className={style.userList}>
      <div className={style.scrollBlock}>
        <Card />
      </div>
    </div>
  )
}

export default UserList;
