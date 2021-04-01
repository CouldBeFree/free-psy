import React, { FunctionComponent, useEffect } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Chat from "./components/Chat/Chat";
import { Redirect, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./types/rootState";
import { fetchAuthMe } from "./redux/authenticationSlcie";


const App: FunctionComponent = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAuthMe());
  }, [])
  const isAuthenticated = useSelector((state: RootState)  => state.authentication.isAuthenticated);

  return (
    <>
      {isAuthenticated ?
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
