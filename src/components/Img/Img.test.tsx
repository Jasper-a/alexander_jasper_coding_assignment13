import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Img from './Img'

describe('Running Test for Img', () => {
  test('Img is rendered', () => {
    render(<Img />)
  })

  test('Img is disabled', () => {
    render(<Img disabled={true} role='img' />)
    expect(screen.getByRole('img')).toHaveAttribute('disabled', '')
  })
})
