import React from "react";
import { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button
      onClick={() => {
        alert("test button");
      }}
    >
      {text ?? "test"}
    </button>
  );
};

export default Button;
