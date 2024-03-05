import React, { useContext } from "react";
import "./Profile.css";
import UserDetailContext from "./../../Context/UserDetailContext";
function Profile() {
  const { userName } = useContext(UserDetailContext);
  return (
    <>
      <div className="profileContainer">
        <div className="welcomeContainer">
          <h2>Welcome {userName} </h2>
          <p>
            dicta ratione! Culpa excepturi natus eveniet tempora a dolor eaque
          </p>
        </div>
      </div>
    </>
  );
}

export default Profile;
