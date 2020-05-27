import React, { useCallback, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Button, Card, TextField, Quote, Ribbon } from '@stfuandclick/ui'
import { Motivator, ScoreBoard } from '../../components'
import { teamActions, teamSelectors } from '../../store/team/team.slice'
import { AppDispatch } from '../../store'

const StyledForm = styled.form`
  display: flex;
  margin: 0.6rem;
  justify-content: space-between;
  align-items: stretch;

  button {
    margin-left: 0.6rem;
  }
`

const StyledQuote = styled(Quote)`
  margin: 2rem 0;
  height: 6rem;
`

const StyledRibbon = styled(Ribbon)`
  margin-top: 5rem;
`

export const CreateTeam = () => {
  const { teams } = useSelector(teamSelectors.getTopTenTeams)

  const dispatch: AppDispatch = useDispatch()
  const history = useHistory()
  const [teamName, setTeamName] = useState('')

  const onTeamNameChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setTeamName(e.currentTarget.value)
  }

  const createTeam = useCallback(
    e => {
      e.preventDefault()
      const fixedTeamName = teamName.trim()

      if (fixedTeamName) {
        history.push(`/${teamName}`)
      }
    },
    [history, teamName]
  )

  useEffect(() => {
    const promise = dispatch(teamActions.fetchTeams())

    return () => {
      promise.abort()
    }
  }, [dispatch])

  return (
    <>
      <StyledQuote author="anonymous">
        "It's really simple, you just need to click as fast as you can."
      </StyledQuote>

      <Card>
        <StyledForm onSubmit={createTeam}>
          <TextField
            type="text"
            placeholder="Your mom"
            label="Enter your team name:"
            value={teamName}
            onChange={onTeamNameChange}
          />
          <Button type="submit">Click!</Button>
        </StyledForm>

        <StyledRibbon>TOP 10 Clickers</StyledRibbon>

        <ScoreBoard data={teams} />

        <Motivator />
      </Card>
    </>
  )
}

export default CreateTeam
