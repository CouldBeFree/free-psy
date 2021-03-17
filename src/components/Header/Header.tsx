import React from 'react';
import style from './Header.module.css';
import Logo from '../common/Logo/Logo';
import Navbar from '../PrimaryNavbar/PrimaryNavbar';

const Header = () => {
  return (
    <div className={style.header}>
      <Logo />
      <Navbar />
    </div>
  )
}

export default Header;
