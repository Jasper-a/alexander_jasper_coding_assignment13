import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Label from './Label'

describe('Running Test for Label', () => {
  test('Label is rendered', () => {
    render(<Label />)
  })

  test('Label is disabled', () => {
    render(<Label disabled={true} role='label' />)
    expect(screen.getByRole('label')).toHaveAttribute('disabled', '')
  })
})
