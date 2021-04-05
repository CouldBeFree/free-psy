import React, { FunctionComponent } from 'react';
import { NavLink } from "react-router-dom";
import style from './Logo.module.css';

const Logo: FunctionComponent = () => {
  return (
    <NavLink to="/" className={style.link}>
      <div className={style.logo}>
        <div className={style.icon}>Ψ</div>
        <h1 className={style.headline}>PsyFree</h1>
      </div>
    </NavLink>
  )
}

export default Logo;
