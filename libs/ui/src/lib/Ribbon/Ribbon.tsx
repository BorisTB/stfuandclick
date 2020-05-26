import React from 'react'

import styled from '@emotion/styled'

/* eslint-disable-next-line */
export interface RibbonProps {}

const StyledRibbon = styled.div`
  background-color: #4a8fe2;
`

export const Ribbon: React.FC<RibbonProps> = ({ children }) => (
  <StyledRibbon>{children}</StyledRibbon>
)

export default Ribbon
