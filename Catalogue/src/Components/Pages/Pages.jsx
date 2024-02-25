import React, { useState } from "react";
import "./Pages.css";
function Pages({ title, description, imageUrlObject, buttonText }) {
  const [isClicked, setisClicked] = useState(false);
  function handleImageClick() {
    setisClicked(!isClicked);
  }

  function handleExploreMore() {
    console.log("Explore More");
  }
  return (
    <div className="Page">
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="imageContainer">
        {imageUrlObject.map((image, index) => {
          return (
            <img
              src={image.url}
              key={index}
              onClick={handleImageClick}
              className={isClicked ? "Clicked" : ""}
            />
          );
        })}
      </div>

      <button onClick={handleExploreMore}>{buttonText}</button>
    </div>
  );
}

export default Pages;
