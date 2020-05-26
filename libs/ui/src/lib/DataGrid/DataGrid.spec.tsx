import React from 'react'
import { render } from '@testing-library/react'

import DataGrid from './DataGrid'

describe(' DataGrid', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DataGrid columns={[]} />)
    expect(baseElement).toBeTruthy()
  })
})
