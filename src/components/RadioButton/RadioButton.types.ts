import { MouseEventHandler } from 'react'

export interface RadioButtonProps {
  disabled?: boolean
  backgroundColor?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  option?: string
}
