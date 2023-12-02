import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions that need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// https://firebase.google.com/docs/web/setup#available-libraries

//  web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuu7lWXdOoLgogm4uFny4nFz_jkxQOojs",
  authDomain: "sharpeaiassignment-7f4ef.firebaseapp.com",
  projectId: "sharpeaiassignment-7f4ef",
  storageBucket: "sharpeaiassignment-7f4ef.appspot.com",
  messagingSenderId: "457931629648",
  appId: "1:457931629648:web:7525645687f425b9955d55",
  measurementId: "G-62BPXQPQRJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


