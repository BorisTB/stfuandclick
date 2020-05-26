import React from 'react'

import styled from '@emotion/styled'

export interface TextFieldProps {
  type?: 'text' | 'password'
}

const StyledTextField = styled.div`
  color: pink;
`

export const TextField: React.FC<TextFieldProps> = ({ type }) => {
  return (
    <StyledTextField>
      <input type={type} />
    </StyledTextField>
  )
}

TextField.defaultProps = {
  type: 'text'
}

export default TextField
