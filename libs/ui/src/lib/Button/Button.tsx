import React from 'react'

import styled from '@emotion/styled'

export interface ButtonProps {
  onClick?: (e: React.SyntheticEvent<HTMLButtonElement>) => void
  type?: 'button' | 'submit'
}

const StyledButton = styled.button`
  padding: 0.6rem 3rem;
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  background-color: #4a8fe2;
  border: none;
  border-radius: 6px;

  &:not(:disabled) {
    cursor: pointer;

    &:focus {
      background-color: #3181e2;
    }

    &:hover {
      background-color: #277de4;
    }
  }

  &:focus {
    outline: none;
  }
`

export const Button: React.FC<ButtonProps> = ({ children, onClick, type }) => (
  <StyledButton type={type} onClick={onClick}>
    {children}
  </StyledButton>
)

Button.defaultProps = {
  type: 'button'
}

export default Button
