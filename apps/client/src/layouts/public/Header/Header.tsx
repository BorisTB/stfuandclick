import React from 'react'

import { AppBar } from '@stfuandclick/ui'

/* eslint-disable-next-line */
export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => (
  <AppBar align="center">
    <h1>STFUANDCLICK.COM</h1>
  </AppBar>
)

export default Header
