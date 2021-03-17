import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

function AppContainer() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppContainer;
