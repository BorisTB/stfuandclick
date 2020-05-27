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
  justify-content: space-between;
  align-items: stretch;
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
      <Quote author="anonymous">
        It's really simple, you just need to click as fast as you can.
      </Quote>

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

        <Ribbon>TOP 10 Clickers</Ribbon>

        <ScoreBoard data={teams} />

        <Motivator />
      </Card>
    </>
  )
}

export default CreateTeam
