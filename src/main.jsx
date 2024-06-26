import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { store, persistor } from "./store/store.js";
import { Provider } from "react-redux";
import {PersistGate} from 'redux-persist/es/integration/react'
import {Elements} from '@stripe/react-stripe-js'
import {stripePromise} from './utils/stripe/stripe.utils.js'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
       <Elements stripe={stripePromise}>
       <App />
       </Elements>
      </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
