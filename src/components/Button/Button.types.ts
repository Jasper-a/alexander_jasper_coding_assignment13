import { MouseEventHandler } from 'react'

export interface ButtonProps {
  text?: string
  disabled?: boolean
  backgroundColor?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}
