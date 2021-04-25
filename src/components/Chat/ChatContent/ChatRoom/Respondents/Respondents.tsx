import React, { FunctionComponent } from "react";
import { CurrentUser } from "../../../../../types/currentUser";
import { RespondensProps } from "../../../../../types/props/respondensProps";
import Searcher from "../../../../common/Searcher/Searcher";
import Respondent from "./Respondent/Respondent";
import style from "./Respondents.module.css";

const Respondents: FunctionComponent<RespondensProps> = ({users}: RespondensProps) => {

  return (
    <div className={style.respondents}>
      <Searcher placeholder="введіть текст" headline="Пошук повідомлення"/>
      <div className={style.respondentList}>
        {users && users.map((user: CurrentUser) => <Respondent key={user._id} user={user} />)}
      </div>
    </div>
  )
}

export default Respondents;
