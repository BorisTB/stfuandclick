import React from 'react'
import { Link } from 'react-router-dom'

import styled from '@emotion/styled'

import { AppBar } from '@stfuandclick/ui'

/* eslint-disable-next-line */
export interface HeaderProps {}

const StyledLink = styled(Link)`
  color: #fff;
  font-family: Arial Black;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`

export const Header: React.FC<HeaderProps> = () => (
  <AppBar align="center">
    <StyledLink to="/">STFUANDCLICK.COM</StyledLink>
  </AppBar>
)

export default Header
