import React, { FunctionComponent } from 'react';
import style from './Presentation.module.css';
import Button from '../Button/Button';
import { PresentationProps } from "../../../types/props/presentationProps";

const Presentation: FunctionComponent<PresentationProps> = ({slogan, description, buttonText, image}: PresentationProps) => {

  return (
    <div className={style.presenation}>
      <div className={style.wrapper}>
        <div className={style.textBlock}>
          <h2 className={style.slogan}>{slogan}</h2>
          <p className={style.description}>{description}</p>
          <Button>{buttonText}</Button>
        </div>
        <div className={style.imageBlock}>
          <img className={style.image} src={image} alt="мультиплікаційна картинка" />
        </div>
      </div>
    </div>
  )
}

export default Presentation;
