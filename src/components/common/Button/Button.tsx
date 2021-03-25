import React from 'react';
import style from './Button.module.css';

interface ButtonProps {
  children: string
}

const Button = ({ children }: ButtonProps) => {
  return (
    <>
      <button className={style.button}>{children}</button>
    </>
  )
}

export default Button;
