import React from 'react'

import styled from '@emotion/styled'

export interface CounterProps {
  title?: string
  value?: number
}

const StyledCounter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.div`
  font-style: italic;
`

const Value = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #4a8fe2;
`

export const Counter: React.FC<CounterProps> = ({ children, title, value }) => (
  <StyledCounter>
    {title && <Title>{title}</Title>}
    <Value>{value || children || 0}</Value>
  </StyledCounter>
)

export default Counter
