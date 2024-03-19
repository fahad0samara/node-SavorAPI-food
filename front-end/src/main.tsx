import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";

import {store, persistor} from "./redux/store.ts";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </I18nextProvider>
    </Provider>
  </React.StrictMode>,
)
