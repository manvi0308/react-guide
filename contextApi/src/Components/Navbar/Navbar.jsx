import React, { useContext } from "react";
import UserDetailContext from "./../../Context/UserDetailContext";
import "./Navbar.css";

function Navbar({ items }) {
  const { showNavbar, setshowNavbar } = useContext(UserDetailContext);

  return (
    <nav className="navbar">
      <button
        className={showNavbar ? "toggle-btn-show":"toggle-btn"}
        onClick={() => {
          console.log("toggleNavbarFunc");
          setshowNavbar(!showNavbar);
        }}
      >
        ☰
      </button>

      <div className="navContainer">
        <ul className={`nav-links ${showNavbar ? "show" : ""}`}>
          {items.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
          <button className="regButton">Register</button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
