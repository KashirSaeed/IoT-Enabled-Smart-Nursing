import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ProSidebarProvider } from "react-pro-sidebar";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProSidebarProvider>
    <GoogleOAuthProvider clientId="850685752934-8te6qjj7c70pshhd9kg2pmvg85pmc338.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
    </ProSidebarProvider>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
