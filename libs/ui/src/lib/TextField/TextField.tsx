import React, { useCallback, useRef } from 'react'

import styled from '@emotion/styled'

export interface TextFieldProps {
  copyOnClick?: boolean
  disabled?: boolean
  label?: string
  onChange?: (e: React.SyntheticEvent<HTMLInputElement>) => void
  placeholder?: string
  readOnly?: boolean
  type?: 'text' | 'password'
  value?: string
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
  copyOnClick,
  disabled,
  label,
  onChange,
  placeholder,
  readOnly,
  type,
  value,
  ...props
}) => {
  const inputRef = useRef(null)
  const copyValue = () => {
    inputRef.current.select()
    document.execCommand('copy')
  }

  return (
    <StyledLabel>
      {label && <LabelText>{label}</LabelText>}
      <StyledInput
        ref={inputRef}
        type={type}
        placeholder={placeholder}
        readOnly={readOnly}
        disabled={disabled}
        onChange={onChange}
        value={value}
        onClick={copyOnClick && copyValue}
        {...props}
      />
    </StyledLabel>
  )
}

TextField.defaultProps = {
  type: 'text'
}

export default TextField
