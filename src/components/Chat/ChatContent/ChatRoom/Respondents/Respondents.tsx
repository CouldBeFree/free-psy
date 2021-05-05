import React, { FunctionComponent, useState } from "react";
import { NavLink } from "react-router-dom";
import { CurrentUser } from "../../../../../types/currentUser";
import { RespondensProps } from "../../../../../types/props/respondensProps";
import Searcher from "../../../../common/Searcher/Searcher";
import Respondent from "./Respondent/Respondent";
import style from "./Respondents.module.css";

const Respondents: FunctionComponent<RespondensProps> = ({users}: RespondensProps) => {

  
  const [filterName, setFilterName] = useState<string>('');
  const filteredUsers = users.filter((user: CurrentUser) => user.name.includes(filterName));

  return (
    <div className={style.respondents}>
      <Searcher placeholder="введіть текст" headline="Пошук cпіврозмовника" setFilterName={setFilterName}/>
      <div className={style.respondentList}>
        {filteredUsers && filteredUsers.map((user: CurrentUser) =>
        <NavLink
          className={style.link}
          key={user._id}
          to={`/chat/${user._id}`}
          activeClassName={style.selected}
          isActive={(match, location) => location.pathname.includes(user._id)}
        >
          <Respondent user={user}/>
        </NavLink>
        )}
      </div>
    </div>
  )
}

export default Respondents;
