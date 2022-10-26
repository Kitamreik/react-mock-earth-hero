// To use the useNavigate hook in your application, make sure the App component in your index.js file is wrapped in a Router. --> The best place to wrap your React app with a Router component is in your index.js file because that's the entry point of your React application. --> Once your entire app is wrapped with a Router component, you can use any of the hooks from the react router package anywhere in your components.


// DO NOT TOUCH - ROUTER 
// https://bobbyhadz.com/blog/react-onclick-redirect#:~:text=To%20redirect%20to%20another%20page,function%20lets%20us%20navigate%20programmatically

import React from "react";
import { StrictMode } from "react"; // Notes: https://blog.logrocket.com/complete-guide-authentication-with-react-router-v6/
// import ReactDOM from "react-dom/client";
import "./index.css";
import {createRoot} from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// 👇️ wrap App in Router
root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);

// EXPERIMENTAL CODE


/* 
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// reportWebVitals();
*/ 

// ----BOILERPLATE ABOVE----