import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./service/redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "./sass/index.scss";
import { GoogleOAuthProvider } from "@react-oauth/google";
const clientId =
  "428051908911-bf5tql17jbekpe5r56ph8q3u8l5jk1h2.apps.googleusercontent.com";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientId}> 
      <Provider store={store}>
        <App />
      </Provider>
   </GoogleOAuthProvider>
  </React.StrictMode>
);
