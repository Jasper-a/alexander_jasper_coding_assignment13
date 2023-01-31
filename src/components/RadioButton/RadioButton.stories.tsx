import React from 'react'
import { Story, Meta } from '@storybook/react'

import RadioButton from './RadioButton'
import { RadioButtonProps } from './RadioButton.types'

export default {
  title: 'Coding12/RadioButton',
  component: RadioButton,
  argTypes: {},
} as Meta<typeof RadioButton>

const Template: Story<RadioButtonProps> = (args) => <RadioButton {...args} />

export const Enabled = Template.bind({})
Enabled.args = {
  backgroundColor: '#9999AA',
  disabled: false,
  option: 'This',
}

export const Disabled = Template.bind({})
Disabled.args = {
  backgroundColor: '#9999AA',
  disabled: true,
  option: 'This',
}
