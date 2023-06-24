import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {  HelmetProvider } from 'react-helmet-async';
import Apps from './Apps';
import {DataProvider} from './context/dataProvider';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <HelmetProvider>
          <DataProvider>
              <Apps />
          </DataProvider>
      </HelmetProvider>
  </React.StrictMode>
);
serviceWorkerRegistration.register();
