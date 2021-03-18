import React from 'react';
import style from './Presentation.module.css';
import Button from '../../../common/Button/Button';
import mainImage from '../../../../assets/images/main.png';

const Presentation = () => {
  return (
    <div className={style.presenation}>
      <div className={style.wrapper}>
        <div className={style.textBlock}>
          <h2 className={style.slogan}>Безкоштовна психологічна онлайн допомога</h2>
          <p className={style.description}>Тут ви зможете знайти психолога який працюватиме з вами на волонтерських засадах. Ваші консультації проходитимуть анонімно і конфіденційно</p>
          <Button>Обрати волонтера</Button>
        </div>
        <div className={style.imageBlock}>
          <img className={style.image} src={mainImage} alt="main image" />
        </div>
      </div>
    </div>
  )
}

export default Presentation;
