import React from 'react'

import styled from '@emotion/styled'

export interface ButtonProps {
  type?: 'button' | 'submit'
}

const StyledButton = styled.button`
  color: pink;
`

export const Button: React.FC<ButtonProps> = ({ children, type }) => (
  <StyledButton type={type}>{children}</StyledButton>
)

Button.defaultProps = {
  type: 'button'
}

export default Button
