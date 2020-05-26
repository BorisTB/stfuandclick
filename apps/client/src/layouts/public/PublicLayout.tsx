import React from 'react'

import styled from '@emotion/styled'

import Footer from './Footer/Footer'
import Header from './Header/Header'
import Main from './Main/Main'

/* eslint-disable-next-line */
export interface PublicLayoutProps {}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

export const PublicLayout = ({ children }) => (
  <Wrapper>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Wrapper>
)

export default PublicLayout
