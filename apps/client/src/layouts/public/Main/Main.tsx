import React from 'react'

import styled from '@emotion/styled'

/* eslint-disable-next-line */
export interface MainProps {}

const StyledMain = styled('main')<MainProps>`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-self: center;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 540px;
`

export const Main: React.FC<MainProps> = ({ children }) => (
  <StyledMain>{children}</StyledMain>
)

export default Main
