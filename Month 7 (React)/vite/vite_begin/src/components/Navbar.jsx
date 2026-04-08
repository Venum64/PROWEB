import { useState } from "react";

const Navbar = ({ logo, listlinks }) => {

  return (
    <header className="header">
      <div className="container header__nav">
        <a href="#" className="logo">
          {logo}
        </a>
        <ul className="list">
          {listlinks.map((item) => {
            <li key={item.id}>
              <a href="#" className="link">
                {item.name}
              </a>
            </li>;
          })}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
