import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";
import { UserDetailProvider } from "./Context/UserDetailContext";
import Profile from "./Components/Profile/Profile";
import Detail from './Components/Detail/Detail';

function App() {
  const navbarItems = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
    { title: "Services", url: "/services" },
  ];
  function handleChange(e) {
    console.log(e.target.value);
  }
  return (
    <UserDetailProvider>
      <Navbar items={navbarItems} />
      <Login />
      <Detail/>
    </UserDetailProvider>
  );
}

export default App;
