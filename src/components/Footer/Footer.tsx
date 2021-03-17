import React from 'react';
import style from './Footer.module.css';
import Logo from '../common/Logo/Logo';
import SecondaryNavigation from '../SecondaryNavigation/SecondaryNavigation';

const Footer = () => {
  return (
    <div className={style.footer}>
      <Logo />
      <SecondaryNavigation />
    </div>
  )
}

export default Footer;
