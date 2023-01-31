import React from 'react'
import { Story, Meta } from '@storybook/react'

import Img from './Img'
import { ImgProps } from './Img.types'

export default {
  title: 'Coding12/Img',
  component: Img,
  argTypes: {},
} as Meta<typeof Img>

const Template: Story<ImgProps> = (args) => <Img {...args} />

export const Enabled = Template.bind({})
Enabled.args = {
  backgroundColor: '#FFFFFF',
  disabled: false,
  src: 'https://i.kym-cdn.com/entries/icons/mobile/000/018/012/this_is_fine.jpg',
  width: '250px',
  opacity: 1.0,
}

export const Disabled = Template.bind({})
Disabled.args = {
  backgroundColor: '#FFFFFF',
  disabled: true,
  src: 'https://i.kym-cdn.com/entries/icons/mobile/000/018/012/this_is_fine.jpg',
  width: '250px',
  opacity: 1.0,
}
