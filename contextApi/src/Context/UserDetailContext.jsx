import React, { createContext, useState } from "react";

const UserDetailContext = createContext();

export const UserDetailProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userEmail, setuserEmail] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [showNavbar, setshowNavbar] = useState(false);
  return (
    <UserDetailContext.Provider
      value={{
        userName,
        setUserName,
        isSubmitted,
        setIsSubmitted,
        userEmail,
        setuserEmail,
        userPassword,
        setuserPassword,
        showNavbar,
        setshowNavbar
      }}
    >
      {children}
    </UserDetailContext.Provider>
  );
};

export default UserDetailContext;
