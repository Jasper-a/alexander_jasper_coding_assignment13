import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Button from './Button'

describe('Running Test for Button', () => {
  test('Button is rendered', () => {
    render(<Button />)
  })

  test('Button is disabled', () => {
    render(<Button disabled={true} role='button' />)
    expect(screen.getByRole('button')).toHaveAttribute('disabled', '')
  })
})
