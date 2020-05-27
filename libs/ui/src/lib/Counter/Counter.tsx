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

export const Counter: React.FC<CounterProps> = ({ title, value }) => (
  <StyledCounter>
    {title && <Title>{title}</Title>}
    <Value>{(value || 0).toLocaleString()}</Value>
  </StyledCounter>
)

export default Counter
