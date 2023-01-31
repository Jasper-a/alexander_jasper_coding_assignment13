import React, { FC } from 'react'
import styled from 'styled-components'

import { ImgProps } from './Img.types'

const StyledImg = styled.img<ImgProps>`
  display: inline-block;
  padding: 10px 10px;
  width: ${(props) => props.width};
  background-color: ${(props) => props.backgroundColor};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'cursor')};
  opacity: ${(props) => (props.disabled ? 0.5 * props.opacity : 1 * props.opacity)};
`

const Img: FC<ImgProps> = ({ disabled, src, backgroundColor, width, opacity, ...props }) => {
  return (
    <StyledImg
      disabled={disabled}
      backgroundColor={backgroundColor}
      src={src}
      width={width}
      opacity={opacity}
      {...props}
    />
  )
}

export default Img
