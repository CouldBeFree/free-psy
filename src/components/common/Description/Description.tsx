import React, { FunctionComponent } from 'react';
import style from "./Description.module.css";
import classNames from "classnames";
import { DescriptionProps } from "../../../types/props/descriptionProps";

const Description: FunctionComponent<DescriptionProps> = ({
  image,
  howItWorkFirtsDescription,
  howItWorkSecondDescription,
  forWhatFirtsDescription,
  forWhatSecondDescription
}: DescriptionProps) => {
  return (
    <div className={style.descriptionBlock}>
      <div className={style.wrapper}>
        <h3 className={style.title}>Як це працює?</h3>
        <p className={style.description}>{howItWorkFirtsDescription}</p>
        <p className={style.description}>{howItWorkSecondDescription}</p>
        <div className={style.imageBlock}>
          <div className={style.imageWrapper}>
            <img className={style.image} src={image} alt="мультиплікаційна картинка"/>
          </div>
          <div className={classNames(style.title, style.alignRight)}>Що це може вам дати?</div>
        </div>
        <p className={style.description}>{forWhatFirtsDescription}</p>
        <p className={style.description}>{forWhatSecondDescription}</p>
      </div>
    </div>
  )
}

export default Description;
