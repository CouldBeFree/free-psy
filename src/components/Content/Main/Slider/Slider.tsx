import React, { FunctionComponent } from 'react';
import style from './Slider.module.css';
import Card from '../../../common/Card/Card';

const Slider: FunctionComponent = () => {
  return (
    <div className={style.sliderBlock}>
      <div className={style.wrapper}>
        <h3 className={style.title}>Наші психологи</h3>
        <div className={style.slider}>
          <div className={style.arrow}>
            <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M25.6641 20.6719L10.3359 13.5L25.6641 6.39844C26.7891 5.83594 27.2812 4.5 26.7188 3.375L25.8047 1.33594C25.3125 0.210938 23.9062 -0.28125 22.7812 0.210938L1.26562 10.2656C0.492188 10.6875 0 11.4609 0 12.3047V14.7656C0 15.6094 0.492188 16.3828 1.26562 16.8047L22.7812 26.7891C23.9062 27.3516 25.2422 26.8594 25.8047 25.7344L26.7188 23.6953C27.2812 22.5703 26.7891 21.2344 25.6641 20.6719Z" fill="#517361"/>
            </svg>
          </div>
          <div className={style.cardBlock}>
            <Card fullName={undefined} photoUrl={undefined} shortInfo={undefined} />
          </div>
          <div className={style.arrow}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26.6641 10.2656L5.14844 0.28125C4.02344 -0.28125 2.6875 0.210938 2.125 1.33594L1.21094 3.375C0.648438 4.5 1.14062 5.83594 2.26562 6.39844L17.5938 13.5703L2.26562 20.6719C1.14062 21.2344 0.648438 22.5703 1.21094 23.6953L2.125 25.7344C2.6875 26.8594 4.02344 27.3516 5.14844 26.7891L26.6641 16.8047C27.4375 16.3828 28 15.6094 28 14.7656V12.3047C28 11.4609 27.4375 10.6875 26.6641 10.2656Z" fill="#517361"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider;
