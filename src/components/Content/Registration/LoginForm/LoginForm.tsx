import React, { useState } from 'react';
import Button from '../../../common/Button/Button';
import { Form, Field } from 'react-final-form';
import style from './LoginForm.module.css';

const LoginForm = () => {

  const [psychologistForm, setPsychologistForm] = useState(false);

  const onChangeForm = () => {
    setPsychologistForm(!psychologistForm);
  }

  const onSubmit = (formData: any) => {
    console.log(formData);
  }

  return (
    <Form onSubmit={onSubmit} initialValues={{ isPsychologist: [psychologistForm && true] }} render={({ handleSubmit }) => (
      <form className={style.form} onSubmit={handleSubmit}>
        <h2 className={style.title}></h2>

        {psychologistForm ?
          <div className={style.fieldBlock}>
            <label className={style.subtitile}>Прізвище</label>
            <Field name="lastName" component="input" className={style.field} />
            <label className={style.subtitile}>Ім'я</label>
            <Field name="firstName" component="input" className={style.field} />
          </div> :
          <div className={style.fieldBlock}>
            <label className={style.subtitile}>Псевдонім</label>
            <Field name="nickName" component="input" className={style.field} />
          </div>
        }

        <label className={style.subtitile}>Електронна пошта</label>
        <Field name="email" component="input" className={style.field} type="email" />
        <label className={style.subtitile}>Пароль</label>
        <Field name="password" component="input" className={style.field} type="password" />
        <label className={style.subtitile}>Підтвердження паролю</label>
        <Field name="rePassword" component="input" className={style.field} type="password" />
        <div className={style.checkboxBlock}>
          <Field name="isPsychologist" id="isPsychologist" component="input" type="checkbox" value={psychologistForm ? true : ""} onChange={onChangeForm} />
          <label htmlFor="isPsychologist" className={style.subtitile + ' ' + style.checkboxLabel}>Я психолог</label>
        </div>
        <Button>Зареєструватись</Button>
      </form>
    )} />
  )
}

export default LoginForm;
