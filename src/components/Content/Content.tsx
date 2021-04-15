import React, { FunctionComponent } from 'react';
import { Route } from 'react-router';
import style from './Content.module.css';

import Main from './Main/Main';
import Registration from './Registration/Registration';
import Login from "./Login/Login.";
import ForPsychologists from "./ForPsychologists/ForPsychologists";
import ForClients from "./ForClients/ForClients";

const Content: FunctionComponent = () => {
  return (
    <div className={style.content}>
      <Route exact path="/" render={() => <Main />} />
      <Route exact path="/forpsychologists" render={() => <ForPsychologists />} />
      <Route exact path="/forclients" render={() => <ForClients />} />
      <Route path="/registration" render={() => <Registration />} />
      <Route path="/authentication" render={() => <Login />} />
    </div>
  )
}

export default Content;
