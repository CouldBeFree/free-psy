import React, { FunctionComponent, useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from './PrimaryNavbar.module.css';

const Navbar: FunctionComponent = () => {

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
        <NavLink onClick={onChengeURL} exact to="/" className={style.link} activeClassName={style.active}>Головна</NavLink>
        <NavLink onClick={onChengeURL} to="/forpsychologists" className={style.link} activeClassName={style.active}>Для психологів</NavLink>
        <NavLink onClick={onChengeURL} to="/forclients" className={style.link} activeClassName={style.active}>Для клієнтів</NavLink>
        <NavLink onClick={onChengeURL} to="/registration" className={style.link} activeClassName={style.active}>Реєстрація</NavLink>
        <NavLink onClick={onChengeURL} to="/authentication" className={style.link} activeClassName={style.active}>Увійти</NavLink>
      </div>
    </div>
  )
}

export default Navbar;
