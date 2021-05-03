import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
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
        {users && users.map((user: CurrentUser) =>
        <NavLink to={`/chat/${user._id}`} key={user._id} className={style.link} activeClassName={style.selected}
          isActive={(match, location) => {
            console.log()
            if(location.pathname.includes(user._id)) {
              return true
            } else return false
          }}>
          <Respondent user={user}/>
        </NavLink>
        )}
      </div>
    </div>
  )
}

export default Respondents;
