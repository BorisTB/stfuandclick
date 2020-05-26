import React from 'react'

import emotionReset from 'emotion-reset'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'

import { Card } from '@stfuandclick/ui'

import PublicLayout from '../layouts/public/PublicLayout'

import { ReactComponent as Logo } from './logo.svg'
import star from './star.svg'

const StyledApp = styled.div``

export const App = () => {
  return (
    <StyledApp>
      <Global
        styles={css`
          ${emotionReset}

          body {
            background-color: #f2f2f2;
          }
        `}
      />
      <PublicLayout>
        <Card>hi</Card>
      </PublicLayout>
    </StyledApp>
  )
}

export default App
