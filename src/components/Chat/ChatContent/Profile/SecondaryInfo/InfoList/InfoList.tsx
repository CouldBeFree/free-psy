import React, { FunctionComponent } from 'react';
import style from "./InfoList.module.css";
import buttonStyle from "../SecondaryInfo.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../../types/state/rootState";
import classNames from "classnames";
import { InfoListProps } from "../../../../../../types/props/infoListProps";
import { CurrentUser } from "../../../../../../types/currentUser";

const InfoList: FunctionComponent<InfoListProps> = ({setEditMode, editMode, userId}: InfoListProps) => {
  
  const currentUser = userId ?
    useSelector((state: RootState)  => state.users.users?.filter((user: CurrentUser) => user._id === userId)[0]) :
    useSelector((state: RootState)  => state.authentication.currentUser);
  const isSubmitting = useSelector((state: RootState)  => state.authentication.isSubmitting);
  
  return (
    <> 
      {!userId && <button onClick={() => setEditMode(!editMode)} className={classNames(buttonStyle.button, buttonStyle.flexEnd)} disabled={isSubmitting}>
        {!isSubmitting && <svg width="16" height="16" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M35.9453 10.5547C37.2812 9.21875 37.2812 7.03906 35.9453 5.77344L31.7266 1.55469C30.4609 0.21875 28.2812 0.21875 26.9453 1.55469L23.7109 4.78906C23.4297 5.07031 23.4297 5.63281 23.7109 5.98438L31.5156 13.7891C31.8672 14.0703 32.4297 14.0703 32.7109 13.7891L35.9453 10.5547ZM20.9688 7.53125L2.47656 26.0234L1 34.5312C0.789062 35.7266 1.77344 36.7109 2.96875 36.5L11.4766 35.0234L29.9688 16.5312C30.3203 16.25 30.3203 15.6875 29.9688 15.3359L22.1641 7.53125C21.8125 7.25 21.25 7.25 20.9688 7.53125ZM9.71875 24.4062C9.29688 24.0547 9.29688 23.4219 9.71875 23.0703L20.5469 12.2422C20.8984 11.8203 21.5312 11.8203 21.8828 12.2422C22.3047 12.5938 22.3047 13.2266 21.8828 13.5781L11.0547 24.4062C10.7031 24.8281 10.0703 24.8281 9.71875 24.4062ZM7.1875 30.3125H10.5625V32.9141L5.99219 33.6875L3.8125 31.5078L4.58594 26.9375H7.1875V30.3125Z" fill="#517361"/>
        </svg>}
        <span className={buttonStyle.buttonText}>{isSubmitting ? "Завантаження..." : "Редагувати"}</span>
      </button>}

      <div className={style.infoList}>
        <p className={style.headline}>Інформація</p>

        {currentUser?.userType === "psychologist" ?
        <>
          <div className={style.infoLine}>
            <span className={style.typeInfo}>Ім&apos;я:</span>
            <span className={style.info}>{currentUser?.name.split(" ")[1]}</span>
          </div>
          <div className={style.infoLine}>
            <span className={style.typeInfo}>Прізвище:</span>
            <span className={style.info}>{currentUser?.name.split(" ")[0]}</span>
          </div>
          <div className={style.infoLine}>
            <span className={style.typeInfo}>Освіта:</span>
            <span className={style.info}>{currentUser?.education ? currentUser?.education : "Інформація відсутня"}</span>
          </div>
          <div className={style.infoLine}>
            <span className={style.typeInfo}>Напрям психотерапії:</span>
            <span  className={style.info}>{currentUser?.approaches ? currentUser?.approaches : "Інформація відсутня"}</span>
          </div>
          <div className={style.infoLine}>
            <span className={style.typeInfo}>Працюю з:</span>
            <span  className={style.info}>{currentUser?.workWith ? currentUser?.workWith : "Інформація відсутня"}</span>
          </div>
          <div className={style.infoLine}>
            <span className={style.typeInfo}>Про себе:</span>
            <span  className={style.info}>{currentUser?.aboutMe ? currentUser?.aboutMe : "Інформація відсутня"}</span>
          </div>
        </> : 
          <div className={style.infoLine}>
            <span className={style.typeInfo}>Псевдонім:</span>
            <span className={style.info}>{currentUser?.name}</span>
          </div>
        }

        <div className={style.infoLine}>
          <span className={style.typeInfo}>Контакти:</span>
          <span className={style.info}>{currentUser?.contacts ? currentUser?.contacts : "Інформація відсутня"}</span>
        </div>
      </div>
    </>
  )
}

export default InfoList;
