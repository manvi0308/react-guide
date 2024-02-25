import React, { useState } from "react";
import "./Login.css";
import { validateEmail, validatePassword } from "./../../utils/Validation";
function Login() {
  const [userInput, setuserInput] = useState({
    email: "",
    password: "",
  });

  const [isSubmitted, setisSubmitted] = useState(false);
  const [validInputs, setvalidInputs] = useState(false);
  function handleUserInput(e, identifier) {
    // update the userInput state here
    setuserInput((oldValues) => {
      return { ...oldValues, [identifier]: e };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // validate the email and password here
    if (
      validateEmail(userInput.email) &&
      validatePassword(userInput.password)
    ) {
      setvalidInputs(true);
      setisSubmitted(true);
      /* alert("Valid");*/
    } else if (!validateEmail(userInput.email)) {
      alert("Invalid Email");
    } else {
      alert("Invalid Password");
    }
  }
  return (
    <>
      {/* if the inputs are valid, display the success message */}
      {validInputs && isSubmitted ? (
        <div className="mainContainer flexColumnCenter">
          <div className="loginForm flexColumnCenter">
            <h3>Form Submitted</h3>
            <p> Verification code sent to {userInput.email}</p>
            <input type="text" />
            <button>Enter Code</button>
          </div>
        </div>
      ) : (
        <div className="mainContainer flexColumnCenter">
          <form className="loginForm flexColumnCenter">
            <h2>Login Form</h2>
            <label htmlFor="">
              Email
              <input
                type="text"
                onChange={(e) => handleUserInput(e.target.value, "email")}
              />
            </label>
            <label htmlFor="">
              Password
              <input
                type="password"
                onChange={(e) => handleUserInput(e.target.value, "password")}
              />
            </label>

            <button onClick={handleSubmit}>Submit</button>
          </form>
        </div>
      )}
    </>
  );
}

export default Login;
