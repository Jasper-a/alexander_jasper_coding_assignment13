import React, { FC } from 'react'
import styled from 'styled-components'

import { LabelProps } from './Label.types'

const StyledLabel = styled.label<LabelProps>`
  line-height: 1;
  font-size: 15px;
  font-weight: 400;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;
  padding: 9px 15px 11px;
  border: 0;
  color: #000000;
  background-color: ${(props) => props.backgroundColor};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`

const Label: FC<LabelProps> = ({ forId, disabled, text, backgroundColor, onClick, ...props }) => {
  return (
    <StyledLabel
      for={forId}
      onClick={onClick}
      disabled={disabled}
      backgroundColor={backgroundColor}
      {...props}
    >
      {text}
    </StyledLabel>
  )
}

export default Label
