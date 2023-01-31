import React from 'react'
import { Story, Meta } from '@storybook/react'

import Dropdown from './Dropdown'
import { DropdownProps } from './Dropdown.types'

export default {
  title: 'Coding12/Dropdown',
  component: Dropdown,
  argTypes: {},
} as Meta<typeof Select>

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />

export const Enabled = Template.bind({})
Enabled.args = {
  backgroundColor: '#9999AA',
  disabled: false,
  option1: 'This',
  option2: 'That',
  option3: 'They',
}

export const Disabled = Template.bind({})
Disabled.args = {
  backgroundColor: '#9999AA',
  disabled: true,
  option1: 'This',
  option2: 'That',
  option3: 'They',
}
