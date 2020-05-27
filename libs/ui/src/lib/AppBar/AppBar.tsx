import React from 'react'

import styled from '@emotion/styled'

export interface AppBarProps {
  align?: 'center'
}

const StyledAppBar = styled('header')<AppBarProps>`
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  min-height: 40px;
  color: #fff;
  background-color: #4a8fe2;

  ${props =>
    ({
      center: { alignItems: 'center', justifyContent: 'center' }
    }[props.align] || {})}
`

export const AppBar: React.FC<AppBarProps> = ({ children, align }) => (
  <StyledAppBar align={align}>{children}</StyledAppBar>
)

export default AppBar
