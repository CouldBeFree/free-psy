import React, { FunctionComponent } from 'react';
import style from "./ErrorPage.module.css";
import errorImage from "../../../assets/images/404.png";

const ErrorPage: FunctionComponent = () => {
  return (
    <div className={style.pageBackground}>
      <div className={style.wrapper}>
        <div className={style.errorMessageBlock}>
          <h1 className={style.error}>404</h1>
          <p className={style.message}>Сторінка відсутня</p>
        </div>
        <div className={style.errorImageBlock}>
          <img className={style.errorImage} src={errorImage} alt="404" />
        </div>
      </div>
    </div>
  )
}

export default ErrorPage;
