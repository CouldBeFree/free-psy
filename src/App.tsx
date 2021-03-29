import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Chat from "./components/Chat/Chat";
import { Redirect, Route, Switch } from "react-router-dom";

const isLogin = true;

const App = () => {
  return (
    <>
      {isLogin ?
        <>
          <Redirect to="/chat" />
          <Route path="/chat" render={() => <Chat />} />
        </> :
        <>
          <Switch>
            <Redirect from="/chat" to="/authentication" />
            <Route path="/" render={() =>
              <>
                <Header />
                <Content />
                <Footer />
              </>
            } />
          </Switch>
        </>
      }
    </>
  )
}

export default App;
