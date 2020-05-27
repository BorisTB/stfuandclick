import React, { useMemo } from 'react'

import { DataGrid, DataGridColumnConfig } from '@stfuandclick/ui'

export interface ScoreBoardProps {
  data?: object[]
}

export const ScoreBoard: React.FC<ScoreBoardProps> = ({ data }) => {
  const columns: DataGridColumnConfig<object>[] = useMemo(
    () => [
      {
        Cell: (dataItem, rowIndex) => rowIndex + 1
      },
      {
        Header: 'Team',
        align: 'left',
        dataKey: 'name'
      },
      {
        Header: 'Clicks',
        align: 'right',
        dataKey: 'clicks'
      }
    ],
    []
  )

  return <DataGrid columns={columns} data={data} />
}

export default ScoreBoard
