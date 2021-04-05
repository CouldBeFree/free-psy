import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchLogout } from "../../../../redux/authenticationSlcie";
import { RootState } from "../../../../types/state/rootState";
import style from './Logout.module.css';

const Logout: FunctionComponent = () => {
  const dispatch = useDispatch()
  const userName = useSelector((state: RootState) => state.authentication.currentUser?.name);

  const onLogout = () => {
    dispatch(fetchLogout());
  }
  return (
    <div className={style.logout}>
      <svg className={style.icon} width="32" height="37" viewBox="0 0 32 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.75 18.5C20.6719 18.5 24.75 14.4922 24.75 9.5C24.75 4.57812 20.6719 0.5 15.75 0.5C10.7578 0.5 6.75 4.57812 6.75 9.5C6.75 14.4922 10.7578 18.5 15.75 18.5ZM22.0078 20.75H20.8125C19.2656 21.5234 17.5781 21.875 15.75 21.875C13.9219 21.875 12.1641 21.5234 10.6172 20.75H9.42188C4.21875 20.75 0 25.0391 0 30.2422V33.125C0 35.0234 1.47656 36.5 3.375 36.5H28.125C29.9531 36.5 31.5 35.0234 31.5 33.125V30.2422C31.5 25.0391 27.2109 20.75 22.0078 20.75Z" fill="#614885"/>
      </svg>
      <p className={style.name}>{userName}</p>
      <svg onClick={onLogout} className={style.icon} width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M34.9453 14.6953C35.5781 14.0625 35.5781 13.0078 34.9453 12.3047L23.1328 0.492188C22.0078 -0.5625 20.25 0.210938 20.25 1.6875V8.4375H10.6875C9.70312 8.4375 9 9.21094 9 10.125V16.875C9 17.8594 9.70312 18.5625 10.6875 18.5625H20.25V25.3125C20.25 26.8594 22.0781 27.5625 23.1328 26.5078L34.9453 14.6953ZM13.5 26.1562V23.3438C13.5 22.9219 13.0781 22.5 12.6562 22.5H6.75C5.48438 22.5 4.5 21.5156 4.5 20.25V6.75C4.5 5.55469 5.48438 4.5 6.75 4.5H12.6562C13.0781 4.5 13.5 4.14844 13.5 3.65625V0.84375C13.5 0.421875 13.0781 0 12.6562 0H6.75C3.02344 0 0 3.02344 0 6.75V20.25C0 23.9766 3.02344 27 6.75 27H12.6562C13.0781 27 13.5 26.6484 13.5 26.1562Z" fill="#614885"/>
      </svg>
    </div>
  )
}

export default Logout;
