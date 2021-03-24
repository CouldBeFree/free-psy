import React from 'react';
import Button from '../../../common/Button/Button';
import { Form, Field } from 'react-final-form';
import style from './LoginForm.module.css';
import { required, minLength, maxLength, repeatPassword, composeValidators } from '../../../../utilities/validators/general';
import { passwordPattern, emailPattern } from '../../../../utilities/validators/pattern';

const LoginForm = () => {

  const onSubmit = (formData: any) => {
    console.log(formData);
  }

  return (
    <Form onSubmit={onSubmit} render={({ handleSubmit, values }) => (
      <form className={style.form} onSubmit={handleSubmit}>
        <h2 className={style.title}></h2>
        {
          values.isPsychologist ?
            <div>
              <Field name="lastName" component="input" validate={composeValidators(required, minLength(2), maxLength(100))} >
                {({ input, meta }) => (
                  <div className={style.inputBlock}>
                    <label className={style.subtitile}>{meta.error && meta.touched ? <span className={style.error}>{meta.error}</span> : "Прізвище"}</label>
                    <input {...input} className={style.field} type="text" placeholder="Шевченко" />
                  </div>
                )}
              </Field>
              <Field name="firstName" validate={composeValidators(required, minLength(2), maxLength(100))} >
                {({ input, meta }) => (
                  <div className={style.inputBlock}>
                    <label className={style.subtitile}>{meta.error && meta.touched ? <span className={style.error}>{meta.error}</span> : "Ім'я"}</label>
                    <input {...input} className={style.field} type="text" placeholder="Олена" />
                  </div>
                )}
              </Field>
            </div> :
            <Field name="nickName" validate={composeValidators(required, minLength(2), maxLength(100))} >
              {({ input, meta }) => (
                <div className={style.inputBlock}>
                  <label className={style.subtitile}>{meta.error && meta.touched ? <span className={style.error}>{meta.error}</span> : "Псевдонім"}</label>
                  <input {...input} className={style.field} type="text" placeholder="Anonym" />
                </div>
              )}
            </Field>
        }
        <Field name="email" validate={composeValidators(required, maxLength(200), emailPattern)}>
          {({ input, meta }) => (
            <div className={style.inputBlock}>
              <label className={style.subtitile}>{meta.error && meta.touched ? <span className={style.error}>{meta.error}</span> : "Електронна пошта"}</label>
              <input {...input} className={style.field} type="email" placeholder="email@address.com" />
            </div>
          )}
        </Field>
        <Field name="password" validate={composeValidators(required, minLength(8), maxLength(200), passwordPattern)} >
          {({ input, meta }) => (
            <div className={style.inputBlock}>
              <label className={style.subtitile}>{meta.error && meta.touched ? <span className={style.error}>{meta.error}</span> : "Пароль"}</label>
              <input {...input} className={style.field} type="password" placeholder="Створіть пароль (мінімум 8 символів)" />
            </div>
          )}
        </Field>
        <Field name="rePassword" validate={composeValidators(required, minLength(8), maxLength(200), passwordPattern, repeatPassword(values.rePassword))} >
          {({ input, meta }) => (
            <div className={style.inputBlock}>
              <label className={style.subtitile}>{meta.error && meta.touched ? <span className={style.error}>{meta.error}</span> : "Підтвердження паролю"}</label>
              <input {...input} className={style.field} type="password" placeholder="Повторіть пароль" />
            </div>
          )}
        </Field>
        <div className={style.checkboxBlock}>
          <Field name="isPsychologist" id="isPsychologist" component="input" type="checkbox" />
          <label htmlFor="isPsychologist" className={style.subtitile + ' ' + style.checkboxLabel}>Я психолог</label>
        </div>
        <Button>Зареєструватись</Button>
      </form>
    )} />
  )
}

export default LoginForm;
