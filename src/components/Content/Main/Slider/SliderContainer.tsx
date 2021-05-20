import React, { FunctionComponent, useEffect, useState } from 'react';
import Card from '../../../common/Card/Card';
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { RootState } from "../../../../types/state/rootState";
import { CurrentUser } from "../../../../types/currentUser";

import style from './SliderContainer.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SliderContainer: FunctionComponent = () => {

  const checkWindowWidth = () => {
    if (window.innerWidth < 750) {
      setSlidesToShow(1);
    } else if (window.innerWidth < 1200 && window.innerWidth >= 750) {
      setSlidesToShow(2);
    }
    else {
      setSlidesToShow(3);
    }
  }

  const handleResize = (event: UIEvent) => {
    const target = event.target as Window;
    if (target.innerWidth < 750) {
      setSlidesToShow(1);
    } else if (target.innerWidth < 1200 && target.innerWidth >= 750) {
      setSlidesToShow(2);
    }
    else {
      setSlidesToShow(3);
    }
  }

  useEffect(() => {
    checkWindowWidth();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  const userSliders = useSelector((state: RootState) => state.slider.users);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1
  };

  return (
    <div className={style.sliderBlock}>
      <div className={style.wrapper}>
        <h3 className={style.title}>Наші психологи</h3>
        <Slider {...settings}>
          {userSliders && userSliders.map((userSlider: CurrentUser) =>
            <Card key={userSlider._id} fullName={userSlider.name} workWith={userSlider.workWith} userType={userSlider.userType} photoUrl={`http://localhost:5050/${userSlider.photo}`}/>)}
        </Slider>
      </div>
    </div>
  )
}

export default SliderContainer;