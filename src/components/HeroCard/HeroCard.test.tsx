import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import HeroCard from './HeroCard'

describe('Running Test for HeroCard', () => {
  test('HeroCard is rendered', () => {
    render(<HeroCard />)
  })

  test('HeroCard is disabled', () => {
    render(<HeroCard disabled={true} role='herocard' />)
    expect(screen.getByRole('herocard')).toHaveAttribute('disabled', '')
  })
})
