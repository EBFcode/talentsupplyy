import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB0JrXmsdHkMGY5MbenN6plUcPzFiZLAj0",
    authDomain: "nth-champion-337821.firebaseapp.com",
    projectId: "nth-champion-337821",
    storageBucket: "nth-champion-337821.appspot.com",
    messagingSenderId: "747764505000",
    appId: "1:747764505000:web:9eead1bf18ec248a6ae59d",
    measurementId: "G-WXYZ8JW027"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
