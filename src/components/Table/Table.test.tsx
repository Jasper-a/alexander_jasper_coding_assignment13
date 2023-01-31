import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Table from './Table'

describe('Running Test for Table', () => {
  test('Table is rendered', () => {
    render(<Table />)
  })

  test('Table is disabled', () => {
    render(<Table disabled={true} role='table' />)
    expect(screen.getByRole('table')).toHaveAttribute('disabled', '')
  })
})
