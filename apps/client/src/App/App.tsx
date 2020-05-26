import React from 'react'

import { Switch, Route } from 'react-router-dom'
import emotionReset from 'emotion-reset'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'

import PublicLayout from '../layouts/public/PublicLayout'

import CreateTeam from '../views/CreateTeam/CreateTeam'
import Game from '../views/Game/Game'

import { ReactComponent as Logo } from './logo.svg'
import star from './star.svg'

const StyledApp = styled.div``

export const App = () => {
  return (
    <StyledApp>
      <Global
        styles={css`
          ${emotionReset}

          *, *::after, *::before {
            box-sizing: border-box;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            font-smoothing: antialiased;
          }

          body {
            background-color: #f2f2f2;
          }
        `}
      />
      <PublicLayout>
        <Switch>
          <Route exact path="/">
            <CreateTeam />
          </Route>
          <Route path="/:teamName">
            <Game />
          </Route>
        </Switch>
      </PublicLayout>
    </StyledApp>
  )
}

export default App
