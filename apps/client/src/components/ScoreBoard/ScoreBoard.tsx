import React, { useMemo } from 'react'

import { DataGrid } from '@stfuandclick/ui'

export interface ScoreBoardProps {
  data?: object[]
}

export const ScoreBoard: React.FC<ScoreBoardProps> = ({ data }) => {
  const columns = useMemo(
    () => [
      {
        Cell: (dataItem, rowIndex) => rowIndex + 1
      },
      {
        Header: 'Team',
        dataKey: 'name'
      },
      {
        Header: 'Clicks',
        dataKey: 'clicks'
      }
    ],
    []
  )

  return <DataGrid columns={columns} data={data} />
}

export default ScoreBoard
