import React, { useMemo } from 'react'

import styled from '@emotion/styled'

export interface DataGridColumnConfig<T> {
  Header?: React.ReactNode
  dataKey?: string
  Cell?: (dataItem: T, rowIndex: number) => React.ReactNode
  width?: number
  align?: 'left' | 'right' | 'center' | 'justify'
  headerAlign?: 'left' | 'right' | 'center' | 'justify' | 'char'
}

export interface DataGridProps<T> {
  columns: DataGridColumnConfig<T>[]
  data?: T[]
  idKey?: string
  loading?: boolean
  emptyDataMessage?: string
}

export interface DataGridTdProps {
  align: 'left' | 'center' | 'right' | 'justify'
}

const Table = styled.table`
  width: 100%;
`
const Col = styled.col``
const Thead = styled.thead``
const Th = styled.th``
const Tbody = styled.tbody``
const Tr = styled.tr``
const Td = styled('td')<DataGridTdProps>`
  text-align: ${props => props.align || 'left'};
`

export const DataGrid = <T extends object>({
  columns,
  data,
  idKey,
  loading,
  emptyDataMessage
}: DataGridProps<T>) => {
  const { cols, ths } = useMemo(
    () =>
      columns.reduce(
        (acc, column, i) => ({
          cols: [...acc.cols, <Col key={`col-${i}`} width={column.width} />],
          ths: [
            ...acc.ths,
            <Th key={i} align={column.headerAlign || column.align}>
              <span>{column.Header}</span>
            </Th>
          ]
        }),
        { cols: [], ths: [] }
      ),
    [columns]
  )

  const dataStatus = useMemo(() => {
    if (data && data.length) {
      return 'ready'
    }

    if (loading) {
      return 'loading'
    }

    return 'empty'
  }, [data, loading])

  return (
    <Table>
      <colgroup>{cols}</colgroup>
      <Thead>
        <Tr>{ths}</Tr>
      </Thead>
      <Tbody>
        {{
          ready:
            data &&
            data.map((dataItem, rowIndex) => (
              <Tr key={dataItem[idKey]}>
                {columns.map((column, colIndex) => (
                  <Td
                    key={`${dataItem[idKey]}-${colIndex}`}
                    align={column.align}>
                    {typeof column.Cell === 'function'
                      ? column.Cell(dataItem, rowIndex)
                      : dataItem[column.dataKey]}
                  </Td>
                ))}
              </Tr>
            )),
          loading: Array(10)
            .fill(null)
            .map((item, i) => (
              <Tr key={`row-${i}-loading`}>
                {columns.map((column, colIndex) => (
                  <Td
                    key={`row-${i}-col-${colIndex}-loading`}
                    align={column.align}>
                    loading
                  </Td>
                ))}
              </Tr>
            ))
        }[dataStatus] || (
          <Tr>
            <Td align="center" colSpan={columns.length}>
              {emptyDataMessage}
            </Td>
          </Tr>
        )}
      </Tbody>
    </Table>
  )
}

DataGrid.defaultProps = {
  idKey: 'id',
  emptyDataMessage: 'No items found.'
}

export default DataGrid
