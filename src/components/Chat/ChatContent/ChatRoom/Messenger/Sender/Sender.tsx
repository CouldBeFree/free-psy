import React, { FunctionComponent } from 'react';
import style from "./Sender.module.css";
import moment from "moment";
import { Field, Form } from "react-final-form"
import classNames from "classnames";
import { socket } from "../../../../../../services/socketService";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../../types/state/rootState";
import { setMessage } from "../../../../../../redux/respondentSlice";

const Sender: FunctionComponent = () => {
  
  const dispatch = useDispatch();
  const respondentName = useSelector((state: RootState) => state.respondent.currentRespondent?.name);
  const currentUserName = useSelector((state: RootState) => state.authentication.currentUser?.name);
  const currentUserId = useSelector((state: RootState) => state.authentication.currentUser?._id);

  const onTyping = (): void => {
    socket.emit("typing", currentUserId);
  }

  const onMessageSend = (formData: {message?: string}): void => {
    if (formData.message && currentUserName && respondentName) {
      const message = {
        from: currentUserName,
        message: formData.message,
        time: `${Date.now()}`,
        to: respondentName
      }
      socket.emit("message", message);
      dispatch(setMessage(message));
    }
  }

  return (
    <div className={style.formBlock}>
      <Form onSubmit={onMessageSend} render={({ handleSubmit, form }) => (
        <form className={style.form} onSubmit={event => {
          handleSubmit(event);
          form.reset();
        }}>
          <Field name="message" parse={value => {
            onTyping();
            return value;
          }}>
            {({ input }) => (
              <div className={style.inputBlock}>
                <label className={style.label}>
                  <svg className={style.icon} width="33" height="37" viewBox="0 0 33 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.02344 33.3359C8.17188 37.5547 14.9219 37.625 19.1406 33.3359L31.2344 20.9609C31.6562 20.5391 31.6562 19.8359 31.1641 19.4141L29.5469 17.7969C29.125 17.375 28.4219 17.375 28 17.7969L15.9062 30.1719C13.5156 32.6328 9.64844 32.6328 7.25781 30.1719C4.86719 27.7109 4.86719 23.6328 7.32812 21.1719L22.0938 6.05469C23.4297 4.71875 25.6094 4.71875 26.9453 6.05469C28.2812 7.46094 28.2812 9.78125 26.9453 11.1875L14.0781 24.3359C13.7969 24.6172 13.3047 24.6172 12.9531 24.3359C12.6719 23.9844 12.6719 23.3516 13.0234 23L23.1484 12.7344C23.5703 12.2422 23.5703 11.5391 23.0781 11.1172L21.5312 9.57031C21.0391 9.07812 20.3359 9.14844 19.9141 9.57031L9.78906 19.9062C7.75 21.9453 7.67969 25.3203 9.71875 27.4297C11.7578 29.6094 15.2031 29.6094 17.3125 27.5L30.1797 14.3516C33.2734 11.1875 33.2031 6.05469 30.1797 2.89062C27.0156 -0.273438 21.9531 -0.273438 18.8594 2.89062L4.09375 18.0078C-0.0546875 22.2266 -0.125 29.0469 4.02344 33.3359Z" fill="#517361"/>
                  </svg>
                </label>
                <input {...input} className={style.field} type="text" placeholder="Повідомлення" autoComplete="off"/>
                <button className={classNames(style.label, style.button)}>
                  <svg className={style.icon} width="36" height="33" viewBox="0 0 36 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.3672 11.8594L22.9922 1.17188C21.9375 0.257812 20.25 1.03125 20.25 2.50781V8.13281C8.92969 8.20312 0 10.5234 0 21.2109C0 25.5 2.74219 29.7891 5.83594 32.0391C6.75 32.7422 8.15625 31.8281 7.80469 30.7031C4.64062 20.5078 9.28125 17.8359 20.25 17.6953V23.8125C20.25 25.2891 21.9375 26.0625 22.9922 25.1484L35.3672 14.4609C36.1406 13.7578 36.1406 12.5625 35.3672 11.8594Z" fill="#517361"/>
                  </svg>
                </button>
              </div>
            )}
          </Field>
        </form>
      )} />
    </div>
  )
}

export default Sender
