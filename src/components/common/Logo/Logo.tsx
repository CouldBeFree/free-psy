import React from 'react';
import style from './Logo.module.css';

const Logo = () => {
  return (
    <div className={style.logo}>
      <div className={style.icon}>Ψ</div>
      <h1 className={style.headline}>FreePsy</h1>
    </div>
  )
}

export default Logo;
