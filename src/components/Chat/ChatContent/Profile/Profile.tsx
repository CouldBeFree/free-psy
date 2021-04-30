import React, { FunctionComponent, useEffect } from 'react';
import style from "./Profile.module.css";
import PrimaryInfo from "./PrimaryInfo/PrimaryInfo";
import SecondaryInfo from "./SecondaryInfo/SecondaryInfo";
import { useRouteMatch } from "react-router-dom";
import { RootState } from "../../../../types/state/rootState";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../../../redux/usersSlice";
import { CurrentUser } from "../../../../types/currentUser";

const Profile: FunctionComponent = () => {
  const { params: {userId} } = useRouteMatch<{userId: string;}>();
  
  const dispatch = useDispatch();
  const userType = useSelector((state: RootState)  => state.authentication.currentUser?.userType);
  const currentUser = userId ?
    useSelector((state: RootState)  => state.users.users?.filter((user: CurrentUser) => user._id === userId)[0]) :
    useSelector((state: RootState)  => state.authentication.currentUser);

  useEffect(() => {
    if (userType && !currentUser) {
      dispatch(fetchUsers(userType));
    }
  }, []);

  return (
    <div className={style.profile}>
      {currentUser && <>
        <PrimaryInfo userId={userId} />
        <SecondaryInfo userId={userId} />
      </>}
    </div>
  )
}

export default Profile;

