import React, { FunctionComponent } from 'react';
import style from "./Profile.module.css";
import PrimaryInfo from "./PrimaryInfo/PrimaryInfo";
import SecondaryInfo from "./SecondaryInfo/SecondaryInfo";

const Profile: FunctionComponent = () => {

  return (
    <div className={style.profile}>
      <PrimaryInfo />
      <SecondaryInfo />
    </div>
  )
}

export default Profile;
