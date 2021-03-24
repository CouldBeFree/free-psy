import React from 'react';
import style from './Slider.module.css';
import Button from '../../../common/Button/Button';
import Card from '../../../common/Card/Card';
const Slider = () => {
  return (
    <div className={style.sliderBlock}>
      <div className={style.wrapper}>
        <h3 className={style.title}>Наші волонтери</h3>
        <div className={style.slider}>
          <div className={style.arrow}>
            <Button>&#60;</Button>
          </div>
          <div className={style.cardBlock}>
            <Card fullName={undefined} photoUrl={undefined} shortInfo={undefined} />
          </div>
          <div className={style.arrow}>
            <Button>&#62;</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider;
