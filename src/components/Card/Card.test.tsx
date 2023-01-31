import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Card from './Card'

describe('Running Test for Card', () => {
  test('Card is rendered', () => {
    render(<Card />)
  })

  test('Card is disabled', () => {
    render(<Card disabled={true} role='card' />)
    expect(screen.getByRole('card')).toHaveAttribute('disabled', '')
  })
})
