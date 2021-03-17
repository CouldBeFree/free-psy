import React from 'react';
import style from './Main.module.css';
import Button from '../common/Button/Button';
import mainImage from '../../assets/images/main.png';
import Card from '../Card/Card';

const Main = () => {
  return (
    <>
      <div className={style.presenation}>
        <div className={style.textBlock}>
          <h2 className={style.slogan}>Безкоштовна психологічна онлайн допомога</h2>
          <p className={style.description}>Тут ви зможете знайти психолога який працюватиме з вами на волонтерських засадах. Ваші консультації проходитимуть анонімно і конфіденційно</p>
          <Button>Обрати волонтера</Button>
        </div>
        <img className={style.image} src={mainImage} alt="main image"/>
      </div>

      <div className={style.sliderBlock}>
          <h3 className={style.title}>Наші волонтери</h3>
          <div className={style.slider}>
            <div className={style.arrow}>
              <Button>&#60;</Button>
            </div>
            <div className={style.cardBlock}>
              <Card />
            </div>
            <div className={style.arrow}>
              <Button>&#62;</Button>
            </div>
          </div>
      </div>
    </>
  )
}

export default Main;
