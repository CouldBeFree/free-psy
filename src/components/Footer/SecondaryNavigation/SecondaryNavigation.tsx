import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './SecondaryNavigation.module.css';

const SecondaryNavigation = () => {
  return (
    <div className={style.navigation}>
      <p className={style.linkBlock + ' ' + style.contacts}>
        <span className={style.link}>Контакти:  freepsy@ukr.net</span>
      </p>
      <p className={style.linkBlock}>
        <NavLink to="/" className={style.link}>Для психологів</NavLink>
        <NavLink to="/" className={style.link}>Для клієнта</NavLink>
      </p>
      <p className={style.linkBlock}>
        <NavLink to="/regitration" className={style.link}>Реєстрація</NavLink>
        <NavLink to="/" className={style.link}>Увійти</NavLink>
      </p>
      <p className={style.linkBlock}>
        <NavLink to="/" className={style.link}>Підтримати</NavLink>
        <NavLink to="/" className={style.link}>Задати запитання</NavLink>
      </p>
    </div>
  )
}

export default SecondaryNavigation;
