import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
   <HashRouter>
      <App />
   </HashRouter>
  
 
);
reportWebVitals();
