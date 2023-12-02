import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Transaction from "./pages/Transaction/Transaction.jsx"; // You need to create this component
import Data from "./pages/Data/Data.jsx"; // You need to create this component
import "./App.css"; // You need to create this CSS file
import Header from "./components/Header/Header.jsx";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <Toaster position="top-center" reverseOrder={false} />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/data" element={<Data />} />
      </Routes>
    </Router>
  );
}

export default App;
