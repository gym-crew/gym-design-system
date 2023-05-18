import React from "react";
import { ButtonProps } from "./Button.types";

import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: tomato;
`;

const Btn = styled.button`
  width: 90%;
  height: 90%;
  border: 1px solid gray;
`;

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <Wrapper>
      <Btn
        onClick={() => {
          alert("test button");
        }}
      >
        {text ?? "test"}
      </Btn>
    </Wrapper>
  );
};

export default Button;
