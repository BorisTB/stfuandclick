import React from 'react'
import { render } from '@testing-library/react'

import Counter from './Counter'

describe(' Counter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Counter />)
    expect(baseElement).toBeTruthy()
  })
})
