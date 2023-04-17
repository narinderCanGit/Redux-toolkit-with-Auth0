import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./store/configureStore";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Auth0Provider
    domain="dev-xp18rvbf0xygbxhu.us.auth0.com"
    clientId="IdHIlX3MbVhhoqBZRYUB5aVoodyNI8Xv"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
        <Provider store={store}>
            <App />
        </Provider>
    </Auth0Provider>
    
);
