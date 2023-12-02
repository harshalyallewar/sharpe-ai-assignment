// Import React and ReactDOM for rendering
import React from "react";
import ReactDOM from "react-dom/client";

// Import styling for the entire application
import "./index.css";

// Import the main App component
import App from "./App";

// Import Firebase SDK components
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration object containing credentials
const firebaseConfig = {
  apiKey: "YourApiKey",
  authDomain: "YourAuthDomain",
  projectId: "YourProjectId",
  storageBucket: "YourStorageBucket",
  messagingSenderId: "YourMessagingSenderId",
  appId: "YourAppId",
  measurementId: "YourMeasurementId",
};

// Initialize Firebase with the provided configuration
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Create a root element for ReactDOM rendering
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the main App component within React.StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: If you want to measure performance, uncomment the following lines
// Import reportWebVitals function (assuming it's part of your project)
// import reportWebVitals from './reportWebVitals';

// Call the reportWebVitals function to log performance data
// reportWebVitals();
