import React, { FunctionComponent } from 'react';
import Slider from './Slider/SliderContainer';
import mainImage from '../../../assets/images/main.png';
import Presentation from "../../common/Presentation/Presentation";

const Main: FunctionComponent = () => {
  return (
    <>
      <Presentation
        slogan="Безкоштовна психологічна онлайн допомога"
        description="Тут ви зможете знайти психолога, який надасть вам безкоштовні психологічні консультації. Будьте впевнені, що послуги надаватимуться анонімно та конфіденційно."
        buttonText="Обрати психолога"
        image={mainImage}
      />
      <Slider />
    </>
  )
}

export default Main;
