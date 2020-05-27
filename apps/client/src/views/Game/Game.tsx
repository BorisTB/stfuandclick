import React, { useCallback, useEffect } from 'react'
import styled from '@emotion/styled'
import { useParams } from 'react-router-dom'
import { Button, Card, Counter, TextField } from '@stfuandclick/ui'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../store'
import { teamActions, teamSelectors } from '../../store/team/team.slice'

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
const ButtonWrapper = styled.div`
  width: 100%;
  padding: 0.6rem;
`

const StyledButton = styled(Button)`
  width: 100%;
  padding: 2rem;
`

export const Game = () => {
  const url = window?.location?.href
  const { teamName } = useParams()
  const { teams } = useSelector(teamSelectors.getTopTenTeams)
  const dispatch: AppDispatch = useDispatch()
  const current = useSelector(teamSelectors.getCurrent)

  useEffect(() => {
    dispatch(teamActions.setCurrentTeam(teamName))
  }, [dispatch, teamName])

  const onClick = useCallback(
    e => {
      if (e.detail === 0) {
        // TODO: handle cheater (pressing enter instead of clicking)
      } else {
        dispatch(
          teamActions.click({
            teamName,
            session: current.session
          })
        )
      }
    },
    [dispatch, teamName, current.session]
  )

  useEffect(() => {
    const promise = dispatch(teamActions.fetchTeams())

    return () => {
      promise.abort()
    }
  }, [dispatch])

  return (
    <>
      <h1>Clicking for team {current.team.name}</h1>
      <InfoText>
        Too lazy to click? Let your pals click for you:{' '}
        <TextField readOnly value={url} copyOnClick />
      </InfoText>

      <Card>
        <ButtonWrapper>
          <StyledButton onClick={onClick}>Click!</StyledButton>
        </ButtonWrapper>

        <Counters>
          <Counter title="Your clicks:" value={current.clicks} />
          <Counter title="Team clicks:" value={current.team.clicks} />
        </Counters>

        <ScoreBoard data={teams} />

        <Motivator />
      </Card>
    </>
  )
}

export default Game
