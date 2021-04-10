import React, { FunctionComponent } from "react";
import Searcher from "../../../../common/Searcher/Searcher";
import Respondent from "./Respondent/Respondent";
import style from "./Respondents.module.css";

const Respondents: FunctionComponent = () => {
  return (
    <div className={style.respondents}>
      <Searcher placeholder="введіть текст" headline="Пошук повідомлення"/>
      <div className={style.respondentList}>
        <Respondent />
        <Respondent />
        <Respondent />
        <Respondent />
        <Respondent />
        <Respondent />
      </div>
    </div>
  )
}

export default Respondents;
