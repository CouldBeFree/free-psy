import React, { FunctionComponent } from 'react';
import loader from "../../../assets/images/loader.svg";
import style from "./Loader.module.css";

const Loader: FunctionComponent = () => {
  return (
    <div className={style.loaderBlock}>
      <img className={style.loader} src={loader} alt="Loading..."/>
    </div>
  )
}

export default Loader;
