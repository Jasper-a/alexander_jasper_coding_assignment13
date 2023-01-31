import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Text from './Text'

describe('Running Test for Text', () => {
  test('Text is rendered', () => {
    render(<Text />)
  })

  test('Text is disabled', () => {
    render(<Text disabled={true} role='text' />)
    expect(screen.getByRole('text')).toHaveAttribute('disabled', '')
  })
})
