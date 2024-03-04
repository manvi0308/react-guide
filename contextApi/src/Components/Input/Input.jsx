import React, { useState } from "react";
import "./Input.css";
function Input({ type, placeholder, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="inputs"
      onChange={onChange}
    />
  );
}

export default Input;
