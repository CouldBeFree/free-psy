import React from 'react';
import { Route } from 'react-router';
import style from './Content.module.css';
import Main from './Main/Main';
import Registration from './Registration/Registration';

const Content = () => {
  return (
    <div className={style.content}>
      <Route exact path="/" render={() => <Main />} />
      <Route path="/registration" render={() => <Registration />} />
    </div>
  )
}

export default Content;
