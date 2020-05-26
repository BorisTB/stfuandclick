import React, { useCallback } from 'react'

import styled from '@emotion/styled'

import { Button, Card, TextField, Quote, Ribbon } from '@stfuandclick/ui'

import ScoreTable from '../../components/ScoreTable/ScoreTable'

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
`

export const CreateTeam = () => {
  const createTeam = useCallback(e => {
    console.log({ e })

    e.preventDefault()
  }, [])

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

        <ScoreTable />
      </Card>
    </>
  )
}

export default CreateTeam
