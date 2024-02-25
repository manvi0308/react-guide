import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <nav className="topNavbar">
        <ul className="navbarList">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/sunmica">Sunmica</a>
          </li>
          <li>
            <a href="/louvers">Louvers</a>
          </li>
          <li>
            <a href="/wpcpanels">WPC Panels</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
