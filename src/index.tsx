import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter as Router } from "react-router-dom";

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';

import './styles/globals.css'

// Fonts
import "./fonts/Urbanist/gen/stylesheet.css"
import "./fonts/Open_Sans/gen/stylesheet.css"
import "./fonts/Fira_Code/gen/stylesheet.css"

ReactDOM.render(
    <React.StrictMode>
      <Router>
        <I18nextProvider i18n={i18n} >
          <App />
        </I18nextProvider>
      </Router>
    </React.StrictMode>,
  document.getElementById('root')
);