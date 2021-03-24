import React from 'react';
import style from './Card.module.css';
import photoExample from '../../../assets/images/example.webp'

interface CardProps {
  fullName?: string,
  photoUrl?: string,
  shortInfo?: string
}

const Card = ({ fullName = 'Мазур Вікторія', photoUrl = '../../assets/images/example.webp', shortInfo = 'Гештальт-терапевт' }: CardProps) => {
  return (
    <div className={style.card}>
      <p className={style.name}>{fullName}</p>
      <img className={style.photo} src={photoExample} alt="Фото психолога" />
      <p className={style.info}>{shortInfo}</p>
    </div>
  )
}

export default Card;
