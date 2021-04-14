import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import style from './SecondaryNavigation.module.css';
import classNames from "classnames";

const SecondaryNavigation: FunctionComponent = () => {
  return (
    <div className={style.navigation}>
      <p className={classNames(style.linkBlock, style.contacts)}>
        <span className={style.link}><a className={style.emailLink} href="mailto:psyfree@ukr.net">Контакти: psyfree@ukr.net</a> </span>
      </p>
      <p className={style.linkBlock}>
        <NavLink to="/forpsychologists" className={style.link}>Для психологів</NavLink>
        <NavLink to="/forclients" className={style.link}>Для клієнтів</NavLink>
      </p>
      <p className={style.linkBlock}>
        <NavLink to="/registration" className={style.link}>Реєстрація</NavLink>
        <NavLink to="/authentication" className={style.link}>Увійти</NavLink>
      </p>
      <p className={style.linkBlock}>
        <NavLink to="/" className={style.link}>Підтримати</NavLink>
        <NavLink to="/" className={style.link}>Задати запитання</NavLink>
      </p>
    </div>
  )
}

export default SecondaryNavigation;
