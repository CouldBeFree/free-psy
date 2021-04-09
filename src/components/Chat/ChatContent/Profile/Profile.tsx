import React, { FunctionComponent } from 'react';
import { useSelector } from "react-redux";
import { RootState } from "../../../../types/state/rootState";
import style from "./Profile.module.css";
import photoExample from "../../../../assets/images/example.webp";
import { dateConverter } from "../../../../utilities/dateConverter";
const Profile: FunctionComponent = () => {
  const name = useSelector((state: RootState)  => state.authentication.currentUser?.name);
  const createdAt = dateConverter();
  const isOwner = false;
  return (
    <div className={style.profile}>
      <div className={style.primaryInfo}>
        <p className={style.name}>{name}</p>
        {!isOwner && <p className={style.status}>Онлайн</p>}
        <img src={photoExample} alt="User avatar" className={style.avatar}/>
        <p className={style.createdAt}>На сайті з: {createdAt}</p>
      </div>
      <div className={style.secondaryInfo}></div>
    </div>
  )
}

export default Profile;
