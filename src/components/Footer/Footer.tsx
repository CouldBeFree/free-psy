import React, { FunctionComponent } from 'react';
import style from './Footer.module.css';
import Logo from '../common/Logo/Logo';
import SecondaryNavigation from './SecondaryNavigation/SecondaryNavigation';

const Footer: FunctionComponent = () => {
  return (
    <div className={style.footer}>
      <div className={style.wrapper}>
        <div className={style.logoBlock}>
          <Logo />
          <h5 className={style.title}>Спільно з ГО ‘Інсайт’ </h5>
        </div>
        <SecondaryNavigation />
      </div>
    </div>
  )
}

export default Footer;
