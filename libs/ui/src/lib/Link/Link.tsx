import React from 'react'

import styled from '@emotion/styled'

/* eslint-disable-next-line */
export interface LinkProps {
  href?: string
  rel?: string
  title?: string
}

const StyledLink = styled.a`
  color: #4a8fe2;
  font-style: inherit;
`

export const Link: React.FC<LinkProps> = props => (
  <StyledLink target="_blank" rel="nofollow" {...props} />
)

export default Link
