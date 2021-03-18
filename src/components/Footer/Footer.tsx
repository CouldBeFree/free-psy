import React from 'react';
import style from './Footer.module.css';
import Logo from '../common/Logo/Logo';
import SecondaryNavigation from './SecondaryNavigation/SecondaryNavigation';

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.logoBlock}>
        <Logo />
        <h5 className={style.title}>Спільно з ГО ‘Інсайт’ </h5>
      </div>

      <SecondaryNavigation />
    </div>
  )
}

export default Footer;
