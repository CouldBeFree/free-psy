import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from './PrimaryNavbar.module.css';

const Navbar = () => {

  const [showNavbar, setShowNavbar] = useState(false);

  const onChangeCheckbox = () => {
    setShowNavbar(!showNavbar);
  }

  const onChengeURL = () => {
    setShowNavbar(false);
  }

  return (
    <div className={style.navbarBlock}>
      <input onChange={onChangeCheckbox} className={style.checkbox} type="checkbox" checked={showNavbar} />
      <div className={style.burger}>
        <span className={style.firstLine}></span>
        <span className={style.secondLine}></span>
        <span className={style.thirdLine}></span>
      </div>
      <div className={style.navbar}>
        <NavLink onClick={onChengeURL} to="/" className={style.link}>Головна</NavLink>
        <NavLink onClick={onChengeURL} to="/" className={style.link}>Для психологів</NavLink>
        <NavLink onClick={onChengeURL} to="/" className={style.link}>Для клієнта</NavLink>
        <NavLink onClick={onChengeURL} to="/registration" className={style.link}>Реєстрація</NavLink>
        <NavLink onClick={onChengeURL} to="/authentication" className={style.link}>Увійти</NavLink>
      </div>
    </div>
  )
}

export default Navbar;
