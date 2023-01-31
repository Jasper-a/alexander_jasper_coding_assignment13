import React, { FC } from 'react'
import styled from 'styled-components'

import { HeroCardProps } from './HeroCard.types'
import Text from '../Text/Text'
import Img from '../Img/Img'

const StyledHeroCard = styled.div<HeroCardProps>`
  position: relative;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'cursor')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`

const StyledHeroCardInnerDiv = styled.div<HeroCardProps>`
  position: absolute;
  top: 50%;
  width: 75%;
  text-align: center;
`

const HeroCard: FC<HeroCardProps> = ({ disabled, title, text, src, ...props }) => {
  return (
    <StyledHeroCard disabled={disabled} {...props}>
      <Img src={src} width='75%' opacity={0.75} />
      <StyledHeroCardInnerDiv>
        <Text display='block' size='35px' text={title} />
        <Text display='block' size='15px' text={text} />
      </StyledHeroCardInnerDiv>
    </StyledHeroCard>
  )
}

export default HeroCard
