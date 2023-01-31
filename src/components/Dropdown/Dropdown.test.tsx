import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Dropdown from './Dropdown'

describe('Running Test for Dropdown', () => {
  test('Dropdown is rendered', () => {
    render(<Dropdown />)
  })

  test('Dropdown is disabled', () => {
    render(<Dropdown disabled={true} role='dropdown' />)
    expect(screen.getByRole('dropdown')).toHaveAttribute('disabled', '')
  })
})
