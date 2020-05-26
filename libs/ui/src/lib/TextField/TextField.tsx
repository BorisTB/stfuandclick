import React from 'react'

import styled from '@emotion/styled'

export interface TextFieldProps {
  label?: string
  placeholder?: string
  type?: 'text' | 'password'
}

const LabelText = styled.div`
  font-style: italic;
`

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`

const StyledInput = styled.input`
  width: 100%;
  padding: 0.4rem 0.6rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;

  &:focus {
    border-color: #4a8fe2;
  }
`

export const TextField: React.FC<TextFieldProps> = ({
  label,
  placeholder,
  type
}) => (
  <StyledLabel>
    {label && <LabelText>{label}</LabelText>}
    <StyledInput type={type} placeholder={placeholder} />
  </StyledLabel>
)

TextField.defaultProps = {
  type: 'text'
}

export default TextField
