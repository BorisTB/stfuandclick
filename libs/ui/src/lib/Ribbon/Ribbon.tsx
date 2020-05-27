import React from 'react'

import styled from '@emotion/styled'

/* eslint-disable-next-line */
export interface RibbonProps {}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`

const StyledRibbon = styled.div`
  display: inline-block;
  position: relative;
  margin: 0 0 0.8rem;
  padding: 0.5em 1em;
  color: #ffffff;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0px 1px 0px rgba(255, 255, 255, 0.3),
    inset 0px 0px 20px rgba(0, 0, 0, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.4);
  background: #4c8be4;

  &:before,
  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 3em;
    bottom: -0.5em;
    border: 1em solid #3e7fc1;
    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.4);
    z-index: -2;
  }

  &:before {
    left: -2.5em;
    border-right-width: 0.75em;
    border-left-color: transparent;
  }

  &:after {
    right: -2.5em;
    border-left-width: 0.75em;
    border-right-color: transparent;
  }
`

const Content = styled.span`
  &:before,
  &:after {
    content: '';
    bottom: -0.5em;
    position: absolute;
    display: block;
    border-style: solid;
    border-color: #0675b3 transparent transparent transparent;
    z-index: -1;
  }

  &:before {
    left: 0;
    border-width: 0.5em 0 0 0.5em;
  }

  &:after {
    right: 0;
    border-width: 0.5em 0.5em 0 0;
  }
`

export const Ribbon: React.FC<RibbonProps> = ({ children, ...props }) => (
  <Wrapper {...props}>
    <StyledRibbon>
      <Content>{children}</Content>
    </StyledRibbon>
  </Wrapper>
)

export default Ribbon
