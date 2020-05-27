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
  margin: 0 0 1rem;
  font-size: 0.9rem;
  font-style: italic;
  white-space: nowrap;
`

const Counters = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 2rem 0;

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

const TeamName = styled.span`
  font-weight: bold;
`

const Title = styled.div`
  margin: 2rem 0;
`

const StyledTextField = styled(TextField)`
  margin: 0 0.2rem;
  width: 220px;
  font-size: 0.8rem;
`

export const Game = () => {
  const url = window?.location?.host + window?.location?.pathname
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
            session: current.session,
            clicks: current.clicks + 1
          })
        )
      }
    },
    [dispatch, teamName, current.session, current.clicks]
  )

  useEffect(() => {
    const promise = dispatch(teamActions.fetchTeams())

    return () => {
      promise.abort()
    }
  }, [dispatch])

  return (
    <>
      <Title>
        <h1>
          Clicking for team <TeamName>{current.team.name}</TeamName>
        </h1>
      </Title>
      <InfoText>
        Too lazy to click? Let your pals click for you:{' '}
        <StyledTextField readOnly value={url} copyOnClick />
      </InfoText>

      <Card>
        <ButtonWrapper>
          <StyledButton onClick={onClick}>Click!</StyledButton>
        </ButtonWrapper>

        <Counters>
          <Counter title="Your clicks:" value={current.clicks} />
          <Counter title="Team clicks:" value={current.team.clicks} />
        </Counters>

        <ScoreBoard data={teams} highlight={teamName} />

        <Motivator />
      </Card>
    </>
  )
}

export default Game
