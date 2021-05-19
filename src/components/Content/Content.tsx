import React, { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router';
import style from './Content.module.css';

import Main from './Main/Main';
import Registration from './Registration/Registration';
import Login from "./Login/Login.";
import ForPsychologists from "./ForPsychologists/ForPsychologists";
import ForClients from "./ForClients/ForClients";
import ErrorPage from "../common/ErrorPage/ErrorPage";

const Content: FunctionComponent = () => {
  return (
    <div className={style.content}>
      <Switch>
        <Route exact path="/" render={() => <Main />} />
        <Route exact path="/forpsychologists" render={() => <ForPsychologists />} />
        <Route exact path="/forclients" render={() => <ForClients />} />
        <Route exact path="/registration" render={() => <Registration />} />
        <Route exact path="/authentication" render={() => <Login />} />
        <Route path="*" render={() => <ErrorPage />} />
      </Switch>
    </div>
  )
}

export default Content;
