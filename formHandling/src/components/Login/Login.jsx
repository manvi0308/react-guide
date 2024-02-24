import React from "react";
import "./Login.css";
function Login() {
  return (
    <>
      <div className="mainContainer flexColumnCenter">
        <form action="" className="loginForm flexColumnCenter">
          <h2>Login Form</h2>
          <label htmlFor="">
            Email
            <input type="text" />
          </label>
          <label htmlFor="">
            Password
            <input type="password" />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Login;
