import React from 'react';
import style from './SecondaryNavigation.module.css';

const SecondaryNavigation = () => {
  return (
    <div className={style.navigation}>
      <p className={style.linkBlock + ' ' + style.contacts}>
        <span className={style.link}>Контакти:  freepsy@ukr.net</span>
      </p>
      <p className={style.linkBlock}>
        <span className={style.link}>Для психологів</span>
        <span className={style.link}>Для клієнта</span>
      </p>
      <p className={style.linkBlock}>
        <span className={style.link}>Реєстрація</span>
        <span className={style.link}>Увійти</span>
        </p>
      <p className={style.linkBlock}>
        <span className={style.link}>Підтримати</span>
        <span className={style.link}>Задати запитання</span>
        </p>
    </div>
  )
}

export default SecondaryNavigation;
