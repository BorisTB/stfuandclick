import React, { useCallback, useState } from 'react'

import styled from '@emotion/styled'

import { Button, Card, Counter, TextField } from '@stfuandclick/ui'

import { Motivator, ScoreBoard } from '../../components'

const InfoText = styled.div`
  display: flex;
  align-items: center;
  font-style: italic;
  white-space: nowrap;
`

const Counters = styled.div`
  display: flex;
  align-items: flex-start;

  * {
    flex: 1;
  }
`

export const Game = () => {
  const url = window?.location?.href
  const [clicksCount, setClicksCount] = useState(0)
  const onClick = useCallback(e => {
    if (e.detail === 0) {
      // TODO: handle cheater (pressing enter instead of clicking)
    } else {
      setClicksCount(count => count + 1)
    }
  }, [])

  return (
    <div>
      <h1>Clicking for team</h1>
      <InfoText>
        Too lazy to click? Let your pals click for you:{' '}
        <TextField readOnly value={url} copyOnClick />
      </InfoText>

      <Card>
        <Button onClick={onClick}>Click!</Button>

        <Counters>
          <Counter title="Your clicks:">{clicksCount}</Counter>
          <Counter title="Team clicks:">989324</Counter>
        </Counters>

        <ScoreBoard />

        <Motivator />
      </Card>
    </div>
  )
}

export default Game
