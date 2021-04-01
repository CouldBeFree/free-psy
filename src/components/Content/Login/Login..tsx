import React, { FunctionComponent } from 'react';
import style from '../Registration/Registration.module.css';
import authenticationImage from '../../../assets/images/authentication.png';
import SignUpForm from './SignInForm/SignInForm';
import classNames from "classnames";

const Login: FunctionComponent = () => {

  return (
    <div className={style.pageBackground}>
      <div className={classNames(style.wrapper, style.reverse)}>
        <SignUpForm />
        <div className={style.imageBlock}><img className={style.image} src={authenticationImage} alt="мультиплікаційна картинка" /></div>
      </div>
    </div >
  )
}

export default Login;
