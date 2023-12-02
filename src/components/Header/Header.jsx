import React from "react";
import './header.css'
import { Link, useLocation, useNavigate } from "react-router-dom";
import Transaction from "../../pages/Transaction/Transaction";


const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='./'>Home</Link>
        </li>
        <li>
          <Link to='./Transaction'>Transaction</Link>
        </li>
        <li>
          <Link to='./data'>Data</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
