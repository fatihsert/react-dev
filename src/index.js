// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './102/App'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React from "react";
import ReactDOM from "react-dom";
import App from "./102/App";
import { UserProvider } from "./102/Context";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
