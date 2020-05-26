import React from 'react'

import styled from '@emotion/styled'

import { AppBar, Link } from '@stfuandclick/ui'

/* eslint-disable-next-line */
export interface FooterProps {}

const StyledFooter = styled.footer`
  display: flex;
  bottom: 0;
  margin-bottom: 1rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-style: italic;
`

export const Footer: React.FC<FooterProps> = () => (
  <StyledFooter>
    <div>
      If you don't like this page, it's{' '}
      <Link
        href="https://www.applifting.cz/"
        title="Software company in Prague, Czechia">
        Applifting
      </Link>
      's fault.
    </div>
  </StyledFooter>
)

export default Footer
