import React, { ChangeEventHandler, FunctionComponent } from 'react';
import { useSelector } from "react-redux";
import { RootState } from "../../../../types/state/rootState";
import style from "./Profile.module.css";
import photoExample from "../../../../assets/images/example.webp";
import { dateConverter } from "../../../../services/dateConverterService";
import classNames from "classnames";
import Editor from "./Editor/Editor";
const Profile: FunctionComponent = () => {

  const name = useSelector((state: RootState)  => state.authentication.currentUser?.name);
  const createdAt = dateConverter();
  const isOwner = true;

  const onPhotoSelected: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.files!.length) {
        console.log(e);
    }
  }

  return (
    <div className={style.profile}>
      <div className={style.primaryInfo}>
        <p className={style.name}>{name}</p>
        {!isOwner && <p className={style.status}>Онлайн</p>}
        <img src={photoExample} alt="User avatar" className={style.avatar}/>
        {isOwner && <label htmlFor="upload-button" className={classNames(style.button, style.scale)}>Завантажити фото
            <input id="upload-button" className={style.uploadButton} type="file" onChange={onPhotoSelected} />
        </label>}
        <p className={style.createdAt}>На сайті з: {createdAt}</p>
        <button className={classNames(style.button, style.shadow)}>
          <svg width="27" height="18" viewBox="0 0 36 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M35.2969 8.92969C33.6797 10.1953 31.6406 11.7422 24.4688 16.9453C23.0625 18 20.4609 20.3203 18 20.3203C15.4688 20.3203 12.9375 18 11.4609 16.9453C4.28906 11.7422 2.25 10.1953 0.632812 8.92969C0.351562 8.71875 0 8.92969 0 9.28125V23.625C0 25.5234 1.47656 27 3.375 27H32.625C34.4531 27 36 25.5234 36 23.625V9.28125C36 8.92969 35.5781 8.71875 35.2969 8.92969ZM18 18C19.6172 18.0703 21.9375 15.9609 23.1328 15.1172C32.4844 8.36719 33.1875 7.73438 35.2969 6.04688C35.7188 5.76562 36 5.27344 36 4.71094V3.375C36 1.54688 34.4531 0 32.625 0H3.375C1.47656 0 0 1.54688 0 3.375V4.71094C0 5.27344 0.210938 5.76562 0.632812 6.04688C2.74219 7.73438 3.44531 8.36719 12.7969 15.1172C13.9922 15.9609 16.3125 18.0703 18 18Z" fill="#517361"/>
          </svg>
          <span className={style.buttonText}>Написати повідомлення</span>
        </button>
      </div>
      <div className={style.secondaryInfo}>
        <p className={style.headline}>Інформація</p>
        <div className={style.infoBlock}>
          <p className={style.infoLine}><span className={style.typeInfo}>Ім&apos;я:</span> {name?.split(" ")[1]}</p>
        </div>
        <div className={style.infoBlock}>
          <p className={style.infoLine}><span className={style.typeInfo}>Прізвище:</span> {name?.split(" ")[0]}</p>
        </div>
        <div className={style.infoBlock}>
          <Editor />
          <p className={style.infoLine}><span className={style.typeInfo}>Освіта:</span> інформація відсутня</p>
        </div>
        <div className={style.infoBlock}>
          <Editor />
          <p className={style.infoLine}><span className={style.typeInfo}>Напрям психотерапії:</span> інформація відсутня</p>
        </div>
        <div className={style.infoBlock}>
          <Editor />
          <p className={style.infoLine}><span className={style.typeInfo}>Працюю з:</span> інформація відсутня</p>
        </div>
        <div className={style.infoBlock}>
          <Editor />
          <p className={style.infoLine}><span className={style.typeInfo}>Про себе:</span> інформація відсутня</p>
        </div>
        <div className={style.infoBlock}>
          <Editor />
          <p className={style.infoLine}><span className={style.typeInfo}>Контакти:</span> інформація відсутня</p>
        </div>
      </div>
    </div>
  )
}

export default Profile;
