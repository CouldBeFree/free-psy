import React from 'react';
import style from './PrimaryNavbar.module.css';

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <p className={style.link}>Головна</p>
      <p className={style.link}>Для психологів</p>
      <p className={style.link}>Для клієнта</p>
      <p className={style.link}>Реєстрація</p>
      <p className={style.link}>Увійти</p>
    </div>
  )
}

export default Navbar;
