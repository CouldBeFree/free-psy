import React, { FunctionComponent } from 'react';
import style from './Card.module.css';
import photoExample from '../../../assets/images/example.webp';
import { CardProps } from "../../../types/props/cardProps";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

const Card: FunctionComponent<CardProps> = ({ id, fullName, userType, contacts = 'поки що інформація відсутня...', photoUrl = photoExample, workWith = 'поки що інформація відсутня' }: CardProps) => {
  return (
    <NavLink to={`/chat/profile/${id}`} className={style.linkWrapper}> 
      <div className={style.card}>
        <p className={style.name}>{fullName}</p>
        <div className={style.imageBlock}>
          <img className={style.photo} src={photoUrl} alt="Фото психолога" />
        </div>
        <div className={style.workWith}>
          {userType === "user" ? "Контакти:" : "Працюю з:"}
          <p className={classNames(style.shortInfo, {
            [style.textCenter]: contacts === 'поки що інформація відсутня...'
          })}>{userType === "user" ? `${contacts}` : `${workWith}`}</p>
        </div>
      </div>
    </NavLink> 
  )
}

export default Card;
