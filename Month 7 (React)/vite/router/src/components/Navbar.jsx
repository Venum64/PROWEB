import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className="header">
      <div className="container header__nav">
        <Link to="/" className="logo">Logo</Link>
        <ul className="list">
          <li className="list__item">
            <Link to="/" className="list__item-link">
              Home
            </Link>
          </li>
          <li className="list__item">
            <Link to="/about" className="list__item-link">
              About
            </Link>
          </li>
          <li className="list__item">
            <Link to="/product" className="list__item-link">
              Product
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
