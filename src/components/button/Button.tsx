import React from 'react';
import { ButtonProps } from './Button.types';

import styled from 'styled-components';
import DoctorhereComponent from '../DoctorhereComponent';

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.logoGreen};
`;

const Btn = styled.button`
  width: 90%;
  height: 90%;
  border: 1px solid gray;
  background-color: ${({ theme }) => theme.colors.blue100p};
`;

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <DoctorhereComponent>
      <Wrapper>
        <Btn
          onClick={() => {
            alert('test button');
          }}
        >
          {text ?? 'test'}
        </Btn>
      </Wrapper>
    </DoctorhereComponent>
  );
};

export default Button;
