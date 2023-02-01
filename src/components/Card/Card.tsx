import React, { FC } from 'react'
import styled from 'styled-components'

import { CardProps } from './Card.types'
import Img from '../Img/Img'
import Text from '../Text/Text'

const StyledCard = styled.div<CardProps>`
  display: inline-block;
  border: 0;
  border-radius: 3;
  color: #000000;
  background-color: ${(props) => props.backgroundColor};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'cursor')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`

const Card: FC<CardProps> = ({
  disabled,
  title,
  text,
  src,
  imgWidth,
  backgroundColor,
  ...props
}) => {
  return (
    <StyledCard disabled={disabled} backgroundColor={backgroundColor} {...props}>
      <Img src={src} width={imgWidth} />
      <Text text={title} centered='false' display='block' size='20px' />
      <Text text={text} centered='false' display='block' size='15px' />
    </StyledCard>
  )
}

export default Card
