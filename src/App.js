import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router/Router';
import { I18nextProvider } from "react-i18next";

import i18n from "./i18n";
class App extends Component {
  render() {
    return (
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </I18nextProvider>
    );
  }
}
export default App;