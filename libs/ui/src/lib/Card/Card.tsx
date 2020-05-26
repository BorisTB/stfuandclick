import React from 'react'

import styled from '@emotion/styled'

/* eslint-disable-next-line */
export interface CardProps {}

const StyledCard = styled.div`
  width: 100%;
  background-color: #fff;
  border: 4px solid #4a8fe2;
  border-radius: 10px;
`

export const Card: React.FC<CardProps> = ({ children }) => (
  <StyledCard>{children}</StyledCard>
)

export default Card
