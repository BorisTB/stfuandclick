import React, { useMemo } from 'react'

import { DataGrid } from '@stfuandclick/ui'

interface ScoreTable {
  data?: object[]
}

const ScoreTable: React.FC<ScoreTable> = ({ data }) => {
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

export default ScoreTable
