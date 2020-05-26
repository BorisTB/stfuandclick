import React from 'react'

import styled from '@emotion/styled'

/* eslint-disable-next-line */
export interface CardProps {}

const StyledCard = styled.div`
  width: 100%;
  background-color: #fff;
  border: 2px solid #4a8fe2;
  border-radius: 10px;
`

export const Card = (props: CardProps) => {
  return (
    <StyledCard>
      <h1>Welcome to Card!</h1>
    </StyledCard>
  )
}

export default Card
