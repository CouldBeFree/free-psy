import React, { FunctionComponent } from 'react';
import style from './Card.module.css';
import photoExample from '../../../assets/images/example.webp';
import { CardProps } from "../../../types/props/CardProps";

const Card: FunctionComponent<CardProps> = ({ fullName = 'Мазур Вікторія', photoUrl = photoExample, shortInfo = 'Гештальт-терапевт' }: CardProps) => {
  return (
    <div className={style.card}>
      <p className={style.name}>{fullName}</p>
      <img className={style.photo} src={photoUrl} alt="Фото психолога" />
      <p className={style.info}>{shortInfo}</p>
    </div>
  )
}

export default Card;
