import React, { FunctionComponent, useEffect } from 'react';
import style from "./Profile.module.css";
import PrimaryInfo from "./PrimaryInfo/PrimaryInfo";
import SecondaryInfo from "./SecondaryInfo/SecondaryInfo";
import { useRouteMatch } from "react-router-dom";
import { RootState } from "../../../../types/state/rootState";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../../../redux/usersSlice";

const Profile: FunctionComponent = () => {
  const { params: {userId} } = useRouteMatch<{userId: string;}>();
  return (
    <div className={style.profile}>
      <PrimaryInfo userId={userId} />
      <SecondaryInfo userId={userId} />
    </div>
  )
}

export default Profile;

