import React, { FunctionComponent } from 'react';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { store } from "./redux";

const AppContainer: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
}

export default AppContainer;
