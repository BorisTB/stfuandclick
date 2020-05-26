import React, { useMemo } from 'react'

import { DataGrid } from '@stfuandclick/ui'

export interface ScoreBoardProps {
  data?: object[]
}

export const ScoreBoard: React.FC<ScoreBoardProps> = ({ data }) => {
  const columns = useMemo(
    () => [
      {
        Cell: () => 1
      },
      {
        Header: 'Team',
        Cell: () => 'abc'
      },
      {
        Header: 'Clicks',
        Cell: () => 1324
      }
    ],
    []
  )

  return <DataGrid columns={columns} data={data} />
}

export default ScoreBoard
