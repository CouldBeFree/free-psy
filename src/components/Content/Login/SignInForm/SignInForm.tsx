import React, { FunctionComponent, useEffect } from 'react';
import Button from '../../../common/Button/Button';
import { Form, Field } from 'react-final-form';
import style from '../../Registration/SignUpForm/SignUpForm.module.css';
import classNames from "classnames";
import { LoginFormData } from "../../../../types/loginFormData";
import { useDispatch, useSelector } from "react-redux";
import { clearBackendErrors, fetchLogin } from "../../../../redux/authenticationSlice";
import { RootState } from "../../../../types/state/rootState";

const SignInForm: FunctionComponent = () => {

  const dispatch = useDispatch();
  const backendError = useSelector((state: RootState)  => state.authentication.validationBackendErrors);
  useEffect(() => {
    return () => {
      dispatch(clearBackendErrors());
    }
  }, []);

  const onSubmit = (formData: LoginFormData) => {
    dispatch(fetchLogin(formData));
  }

  return (
    <Form onSubmit={onSubmit} render={({ handleSubmit }) => (
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.titleBlock}>
          <span className={style.line}></span>
          <h2 className={style.title}>Авторизація</h2>
        </div>
        <Field name="email">
          {({ input, meta }) => (
            <div className={style.inputBlock}>
              <label className={style.subtitile}>{meta.error ? <span className={style.error}>{meta.error}</span> : "Електронна пошта"}</label>
              <input {...input} className={style.field} type="email" placeholder="email@address.com" autoComplete="on" />
            </div>
          )}
        </Field>
        <Field name="password">
          {({ input, meta }) => (
            <div className={style.inputBlock}>
              <label className={style.subtitile}>{meta.error ? <span className={style.error}>{meta.error}</span> : "Пароль"}</label>
              <input {...input} className={style.field} type="password" autoComplete="on"
                placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;" />
            </div>
          )}
        </Field>
        <div className={style.checkboxBlock}>
          <Field name="rememberMe" id="rememberMe" component="input" type="checkbox"/>
          <label htmlFor="rememberMe" className={classNames(style.subtitile, style.checkboxLabel)}>Запам’ятати мене</label>
        </div>
        <p className={style.backendError}>{backendError ? backendError : "\xA0"}</p>
        <Button>Увійти</Button>
      </form>
    )} />
  )
}

export default SignInForm;

