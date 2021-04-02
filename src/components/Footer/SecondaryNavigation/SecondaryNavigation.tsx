import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import style from './SecondaryNavigation.module.css';
import classNames from "classnames";

const SecondaryNavigation: FunctionComponent = () => {
  return (
    <div className={style.navigation}>
      <p className={classNames(style.linkBlock, style.contacts)}>
        <span className={style.link}><a className={style.emailLink} href="mailto:freepsy@ukr.net">Контакти: freepsy@ukr.net</a> </span>
      </p>
      <p className={style.linkBlock}>
        <NavLink to="/" className={style.link}>Для психологів</NavLink>
        <NavLink to="/" className={style.link}>Для клієнта</NavLink>
      </p>
      <p className={style.linkBlock}>
        <NavLink to="/regitration" className={style.link}>Реєстрація</NavLink>
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
