import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import RadioButton from './RadioButton'

describe('Running Test for RadioButton', () => {
  test('RadioButton is rendered', () => {
    render(<RadioButton />)
  })

  test('RadioButton is disabled', () => {
    render(<RadioButton disabled={true} role='radiobutton' />)
    expect(screen.getByRole('radiobutton')).toHaveAttribute('disabled', '')
  })
})
