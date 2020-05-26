import React from 'react'
import { render } from '@testing-library/react'

import Appbar from './AppBar'

describe(' Appbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Appbar />)
    expect(baseElement).toBeTruthy()
  })
})
