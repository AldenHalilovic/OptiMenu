import React from "react";
import "./style.css";
const StyledButton = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="styled-button">
      {text}
    </button>
  );
};

export default StyledButton;
