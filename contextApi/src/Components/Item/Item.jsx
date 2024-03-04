import React from "react";

function Item({ imageUrl, title, shortDesc, buttonText }) {
  return (
    <>
      <div className="itemContainer">
        <img src={imageUrl} alt="" />
        <h3>{title}</h3>
        <p>{shortDesc}</p>
        <button>{buttonText}</button>
      </div>
    </>
  );
}

export default Item;
