import React, { FunctionComponent } from 'react';
import Button from '../../../common/Button/Button';
import { Form, Field } from 'react-final-form';
import style from './SignUpForm.module.css';
import { required, minLength, maxLength, repeatPassword, composeValidators } from '../../../../utilities/validators/general';
import { passwordPattern, emailPattern } from '../../../../utilities/validators/pattern';
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { fetchRegister } from "../../../../redux/authenticationSlcie";
import { RegisterFormDataInteface } from "../../../../types/registerFormData";

const SignUpForm: FunctionComponent = () => {

  const dispatch = useDispatch()

  const onSubmit = (formData: RegisterFormDataInteface) => {

    dispatch(fetchRegister(formData));
    //   console.log(formData)

    //   const url = 'http://localhost:5050/api/v1/auth/register';

    //   fetch(url, {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       name: nickName,
    //       email: email,
    //       password: password,
    //       userType: 'психолог'
    //     }),
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   })
    //   console.log(formData);
  }

  return (
    <Form onSubmit={onSubmit} render={({ handleSubmit, values }) => (
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.titleBlock}>
          <span className={style.line}></span>
          <h2 className={style.title}>Реєстрація</h2>
        </div>
        {
          values.isPsychologist ?
            <div>
              <Field name="lastName" component="input" validate={composeValidators(required, minLength(2), maxLength(100))} >
                {({ input, meta }) => (
                  <div className={style.inputBlock}>
                    <label className={style.subtitile}>{meta.error && meta.touched ? <span className={style.error}>{meta.error}</span> : "Прізвище"}</label>
                    <input {...input} className={style.field} type="text" placeholder="Шевченко" autoComplete="on" />
                  </div>
                )}
              </Field>
              <Field name="firstName" validate={composeValidators(required, minLength(2), maxLength(100))} >
                {({ input, meta }) => (
                  <div className={style.inputBlock}>
                    <label className={style.subtitile}>{meta.error && meta.touched ? <span className={style.error}>{meta.error}</span> : "Ім'я"}</label>
                    <input {...input} className={style.field} type="text" placeholder="Олена" autoComplete="on" />
                  </div>
                )}
              </Field>
            </div> :
            <Field name="nickName" validate={composeValidators(required, minLength(2), maxLength(100))} >
              {({ input, meta }) => (
                <div className={style.inputBlock}>
                  <label className={style.subtitile}>{meta.error && meta.touched ? <span className={style.error}>{meta.error}</span> : "Псевдонім"}</label>
                  <input {...input} className={style.field} type="text" placeholder="Anonym" autoComplete="on" />
                </div>
              )}
            </Field>
        }
        <Field name="email" validate={composeValidators(required, maxLength(200), emailPattern)}>
          {({ input, meta }) => (
            <div className={style.inputBlock}>
              <label className={style.subtitile}>{meta.error && meta.touched ? <span className={style.error}>{meta.error}</span> : "Електронна пошта"}</label>
              <input {...input} className={style.field} type="email" placeholder="email@address.com" autoComplete="on" />
            </div>
          )}
        </Field>
        <Field name="password" validate={composeValidators(required, minLength(8), maxLength(200), passwordPattern)} >
          {({ input, meta }) => (
            <div className={style.inputBlock}>
              <label className={style.subtitile}>{meta.error && meta.touched ? <span className={style.error}>{meta.error}</span> : "Пароль"}</label>
              <input {...input} className={style.field} type="password" placeholder="Створіть пароль (мінімум 8 символів)" autoComplete="on" />
            </div>
          )}
        </Field>
        <Field name="rePassword" validate={composeValidators(required, minLength(8), maxLength(200), passwordPattern, repeatPassword(values.rePassword))} >
          {({ input, meta }) => (
            <div className={style.inputBlock}>
              <label className={style.subtitile}>{meta.error && meta.touched ? <span className={style.error}>{meta.error}</span> : "Підтвердження паролю"}</label>
              <input {...input} className={style.field} type="password" placeholder="Повторіть пароль" autoComplete="on" />
            </div>
          )}
        </Field>
        <div className={style.checkboxBlock}>
          <Field name="isPsychologist" id="isPsychologist" component="input" type="checkbox" />
          <label htmlFor="isPsychologist" className={classNames(style.subtitile, style.checkboxLabel)}>Я психолог</label>
        </div>
        <Button>Зареєструватись</Button>
      </form>
    )} />
  )
}

export default SignUpForm;
