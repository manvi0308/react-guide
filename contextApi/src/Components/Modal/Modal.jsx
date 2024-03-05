import React from "react";
import "./Modal.css";
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <div className="outerModal" onClick={onClose}>
      <div className="innerModal">{children}</div>
    </div>
  );
}

export default Modal;
