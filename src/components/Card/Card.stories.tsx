import React from 'react'
import { Story, Meta } from '@storybook/react'

import Card from './Card'
import { CardProps } from './Card.types'

export default {
  title: 'Coding12/Card',
  component: Card,
  argTypes: {},
} as Meta<typeof Card>

const Template: Story<CardProps> = (args) => <Card {...args} />

export const Enabled = Template.bind({})
Enabled.args = {
  backgroundColor: '#9999AA',
  disabled: false,
  title: 'Enabled',
  text: 'Enabled',
  src: 'https://i.kym-cdn.com/entries/icons/mobile/000/018/012/this_is_fine.jpg',
  imgWidth: '250px',
}

export const Disabled = Template.bind({})
Disabled.args = {
  backgroundColor: '#9999AA',
  disabled: true,
  title: 'Disabled',
  text: 'Disabled',
  src: 'https://i.kym-cdn.com/entries/icons/mobile/000/018/012/this_is_fine.jpg',
  imgWidth: '250px',
}
