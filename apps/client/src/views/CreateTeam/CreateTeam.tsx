import React, { useCallback, useEffect } from 'react'
import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, TextField, Quote, Ribbon } from '@stfuandclick/ui'
import { Motivator, ScoreBoard } from '../../components'
import { teamActions, teamSelectors } from '../../store/team.slice'
import { AppDispatch } from '../../store'

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
`

export const CreateTeam = () => {
  const { teams } = useSelector(teamSelectors.getTopTenTeams)

  const createTeam = useCallback(e => {
    console.log({ e })

    e.preventDefault()
  }, [])

  const dispatch: AppDispatch = useDispatch()

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
