import React, { FunctionComponent } from "react";
import { ButtonProps } from "../../../types/props/ButtonProps";
import style from "./Button.module.css";
import { useHistory } from "react-router-dom";

const Button: FunctionComponent<ButtonProps> = ({ children }: ButtonProps) => {

  const history = useHistory();
  const onRedirect = () => {
    if (children === "Обрати психолога") {
      history.push("/authentication");
    } else if (children === "Зареєструватись") {
      history.push("/registration");
    }
  }

  return (
    <>
      <button className={style.button} onClick={onRedirect}>{children}</button>
    </>
  )
}

export default Button;
