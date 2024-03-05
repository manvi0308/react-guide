import React, { useState, useContext } from "react";
import Input from "./../Input/Input";
import "./Login.css";
import Profile from "./../Profile/Profile";
import UserDetailContext from "./../../Context/UserDetailContext";
import Modal from "./../Modal/Modal";

function Login() {
  const {
    userName,
    setUserName,
    isSubmitted,
    setIsSubmitted,
    userEmail,
    userPassword,
    setuserEmail,
    setuserPassword,
    showNavbar,
  } = useContext(UserDetailContext);

  const [open, setopen] = useState(false);

  const handleClose = () => {
    setopen(false);
  };

  const handleOpen = () => {
    setopen(true);
  };
  // This function should be invoked when the user clicks the submit button.
  function handleSubmit() {
    /* console.log("HandleSubmit");
    console.log(userName);
    console.log(userEmail);
    console.log(userPassword);*/

    if (
      userName.length > 0 &&
      userEmail.length > 0 &&
      userPassword.length > 0
    ) {
      setIsSubmitted(true);
    } else {
      alert("Please fill in all the fields");
    }
  }

  function handleCredentialsChange(e, identifier) {
    if (identifier === "username") {
      setUserName(e);
    } else if (identifier === "email") {
      setuserEmail(e);
    } else {
      setuserPassword(e);
    }
  }

  return (
    <div
      className={
        showNavbar ? "mainContainer" : "mainContainer notShowingNavbar"
      }
    >
      {isSubmitted ? (
        <Profile />
      ) : (
        <>
          <div className="infoContainer">
            <div className="infoContainer__Contents">
              <h2>RMLS</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus libero illum consequatur quo iste, nisi voluptas,
                suscipit consectetur officia esse accusamus! Quasi accusantium
                atque dolores debitis voluptate inventore quas fuga modi
                corrupti illum dolorem hic voluptatum quaerat facilis ipsa
                molestiae, dolor magnam dicta ratione! Culpa excepturi natus
                eveniet tempora a dolor eaq
              </p>
              {/* Implement a modal here */}
              <button onClick={handleOpen}>Read More</button>
              <Modal isOpen={open} onClose={handleClose}>
                <>
                  <h2>RMK - Legacy Continues</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odit nihil non tenetur earum aperiam nulla iure harum, quasi
                    quas unde maxime tempora. A consequuntur excepturi enim
                    provident nulla molestias accusamus?
                  </p>
                </>
              </Modal>
            </div>
          </div>
          <div className="loginContainer">
            <h2>Sign Up</h2>
            <Input
              type={"text"}
              placeholder={"Username"}
              onChange={(e) =>
                handleCredentialsChange(e.target.value, "username")
              }
            />
            <Input
              type={"text"}
              placeholder={"Email"}
              onChange={(e) => handleCredentialsChange(e.target.value, "email")}
            />
            <Input
              type={"password"}
              placeholder={"Password"}
              onChange={(e) =>
                handleCredentialsChange(e.target.value, "password")
              }
            />
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Login;
