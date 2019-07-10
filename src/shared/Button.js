import React from 'react';
import styled from 'styled-components';

const Root = styled.button`
  padding: 0.75em 2em;
  font-size: 1em;
  background-color: rgba(255,255,255,0.7);
  color: orange;
  border: 1px solid orange;
  font-weight: 600;
  border-radius: 2em;
  text-transform: capitalize;
  transition: all 0.25s;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: orange;
    color: white;
  }
`;

const Button = ({ children, busy, ...props }) => {
  return (
    <Root {...props}>
      {children}
      {busy && ' ...'}
    </Root>
  )
}

export default Button;
