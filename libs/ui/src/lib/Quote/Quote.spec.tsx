import React from 'react'
import { render } from '@testing-library/react'

import Quote from './Quote'

describe(' Quote', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Quote author="foo" />)
    expect(baseElement).toBeTruthy()
  })
})
