import React, { FunctionComponent } from 'react';
import { ButtonProps } from "../../../types/props/ButtonProps";
import style from './Button.module.css';

const Button: FunctionComponent<ButtonProps> = ({ children }: ButtonProps) => {
  return (
    <>
      <button className={style.button}>{children}</button>
    </>
  )
}

export default Button;
