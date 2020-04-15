// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './102/App'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./103/App";
// import { UserProvider } from "./103/Context";

// ReactDOM.render(
//   <React.StrictMode>
//     <UserProvider>
//       <App />
//     </UserProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// import React from "react";
// import ReactDOM from "react-dom";
// import App from './103/App'
// const name = 'Josh Perez';
// const element = <h1>Hello, {name}</h1>;
// ReactDOM.render(

//   <App name="fatih">
//     {element}
//   </App>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";
import App from "./104/App";
import { UserProvider } from "./104/Context";

ReactDOM.render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.getElementById("root")
);
