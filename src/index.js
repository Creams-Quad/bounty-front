import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

import BountyContext from './components/bounties/createBountyProvider.js';


ReactDOM.render(
    <Auth0Provider
      domain={process.env.REACT_APP_DOMAIN}
      clientId={process.env.REACT_APP_CLIENT_ID}
      redirectUri={window.location.origin}
      >
      <BountyContext>
        <App />
      </BountyContext>
    </Auth0Provider>,
  document.getElementById("root")
);
