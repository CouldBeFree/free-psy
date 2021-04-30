import classNames from "classnames";
import React, { FunctionComponent } from 'react';
import { Field, Form } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../../types/state/rootState";
import style from "./InfoListForm.module.css";
import buttonStyle from "../SecondaryInfo.module.css";
import { PrimaryInfoFormData } from "../../../../../../types/primaryInfoFormData";
import { InfoListProps } from "../../../../../../types/props/infoListProps";
import { fetchSetInfo } from "../../../../../../redux/authenticationSlice";

const InfoListForm: FunctionComponent<InfoListProps> = ({setEditMode, editMode}: InfoListProps) => {

  const isSubmitting = useSelector((state: RootState)  => state.authentication.isSubmitting);
  const education = useSelector((state: RootState)  => state.authentication.currentUser?.education);
  const approaches = useSelector((state: RootState)  => state.authentication.currentUser?.approaches);
  const workWith = useSelector((state: RootState)  => state.authentication.currentUser?.workWith);
  const aboutMe = useSelector((state: RootState)  => state.authentication.currentUser?.aboutMe);
  const contacts = useSelector((state: RootState)  => state.authentication.currentUser?.contacts);
  const id = useSelector((state: RootState)  => state.authentication.currentUser?._id);
  const userType = useSelector((state: RootState)  => state.authentication.currentUser?.userType);

  const dispatch = useDispatch();

  const onInfoSave = (primaryInfo: PrimaryInfoFormData): void => {
    let property: keyof typeof primaryInfo;
    for (property in primaryInfo) {
      primaryInfo[property] = primaryInfo[property].trim();
    }
    if (id) {
      dispatch(fetchSetInfo({primaryInfo, id}));
    }
    setEditMode(!editMode);
  }

  return (
      <Form onSubmit={onInfoSave} render={({ handleSubmit }) => (
        <form className={style.form} onSubmit={handleSubmit}>

          <button className={classNames(buttonStyle.button, buttonStyle.flexEnd)} disabled={isSubmitting}>
            <svg width="16" height="16.5" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30.4453 7.64062L24.6094 1.80469C23.9766 1.17188 23.1328 0.75 22.2188 0.75H3.375C1.47656 0.75 0 2.29688 0 4.125V28.875C0 30.7734 1.47656 32.25 3.375 32.25H28.125C29.9531 32.25 31.5 30.7734 31.5 28.875V10.0312C31.5 9.11719 31.0781 8.27344 30.4453 7.64062ZM15.75 27.75C13.2188 27.75 11.25 25.7812 11.25 23.25C11.25 20.7891 13.2188 18.75 15.75 18.75C18.2109 18.75 20.25 20.7891 20.25 23.25C20.25 25.7812 18.2109 27.75 15.75 27.75ZM22.5 6.375V13.4062C22.5 13.8984 22.0781 14.25 21.6562 14.25H5.34375C4.85156 14.25 4.5 13.8984 4.5 13.4062V6.09375C4.5 5.67188 4.85156 5.25 5.34375 5.25H21.375C21.5859 5.25 21.7969 5.39062 22.0078 5.53125L22.2188 5.74219C22.3594 5.95312 22.5 6.16406 22.5 6.375Z" fill="#517361"/>
            </svg>
            <span className={buttonStyle.buttonText}>Зберегти</span>
          </button>

          <div className={style.formWrapper}>

            {userType === "psychologist" && <>
              <div className={style.inputBlock}>
                <span className={style.typeInfo}>Освіта:</span>
                <Field className={style.field} name="education" component="textarea" parse={value => value} defaultValue={education} />
              </div>
              <div className={style.inputBlock}>
                <span className={style.typeInfo}>Напрям психотерапії:</span>
                <Field className={style.field} name="approaches" component="textarea" parse={value => (value)} defaultValue={approaches} />
              </div>
              <div className={style.inputBlock}>
                <span className={style.typeInfo}>Працюю з:</span>
                <Field className={style.field} name="workWith" component="textarea" parse={value => (value)} defaultValue={workWith} />
              </div>
              <div className={style.inputBlock}>
                <span className={style.typeInfo}>Про себе:</span>
                <Field className={style.field} name="aboutMe" component="textarea" parse={value => (value)} defaultValue={aboutMe} />
              </div>
            </>}

            <div className={style.inputBlock}>
              <span className={style.typeInfo}>Контакти:</span>
              <Field className={style.field} name="contacts" component="textarea" parse={value => (value)} defaultValue={contacts} />
            </div>
          </div>

        </form>
      )} />
  )
}

export default InfoListForm;
