import React, { FunctionComponent } from 'react';
import style from './Registration.module.css';
import registrationImage from '../../../assets/images/registration.png'
import LoginForm from './SignUpForm/SignUpForm';

const Registration: FunctionComponent = () => {

  return (
    <div className={style.pageBackground}>
      <div className={style.wrapper}>
        <LoginForm />
        <div className={style.imageBlock}><img className={style.image} src={registrationImage} alt="мультиплікаційна картинка" /></div>
      </div>
    </div >
  )
}

export default Registration;
