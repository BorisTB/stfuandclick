import React from 'react'
import { render } from '@testing-library/react'

import Ribbon from './Ribbon'

describe(' Ribbon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ribbon />)
    expect(baseElement).toBeTruthy()
  })
})
