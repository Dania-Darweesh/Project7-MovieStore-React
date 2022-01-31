import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "../node_modules/font-awesome/css/font-awesome.min.css"; 
import App from './App';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
// import Login from './components/Firebase/Login'

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
