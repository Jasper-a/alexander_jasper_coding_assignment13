import React from 'react'
import { Story, Meta } from '@storybook/react'

import Text from './Text'
import { TextProps } from './Text.types'

export default {
  title: 'Coding12/Text',
  component: Text,
  argTypes: {},
} as Meta<typeof Text>

const Template: Story<TextProps> = (args) => <Text {...args} />

export const Enabled = Template.bind({})
Enabled.args = {
  backgroundColor: '#FFFFFF',
  disabled: false,
  text: 'Enabled Enabled Enabled Enabled',
  display: 'inline-block',
  size: '15px',
}

export const Disabled = Template.bind({})
Disabled.args = {
  backgroundColor: '#FFFFFF',
  disabled: true,
  text: 'Disabled Disabled Disabled Disabled',
  display: 'inline-block',
  size: '15px',
}
