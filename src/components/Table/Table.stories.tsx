import React from 'react'
import { Story, Meta } from '@storybook/react'

import Table from './Table'
import { TableProps } from './Table.types'

export default {
  title: 'Coding12/Table',
  component: Table,
  argTypes: {},
} as Meta<typeof Table>

const Template: Story<TableProps> = (args) => <Table {...args} />

export const Enabled = Template.bind({})
Enabled.args = {
  backgroundColor: '#9999AA',
  disabled: false,
  header1: 'coffee',
  header2: 'data',
  header3: 'tooth',
  cell11: 'strategy',
  cell12: 'farmer',
  cell13: 'hall',
  cell21: 'bathroom',
  cell22: 'promotion',
  cell23: 'trainer',
  cell31: 'guitar',
  cell32: 'surgery',
  cell33: 'debt',
  footer1: 'love',
  footer2: 'region',
  footer3: 'agency',
}

export const Disabled = Template.bind({})
Disabled.args = {
  backgroundColor: '#9999AA',
  disabled: true,
  header1: 'coffee',
  header2: 'data',
  header3: 'tooth',
  cell11: 'strategy',
  cell12: 'farmer',
  cell13: 'hall',
  cell21: 'bathroom',
  cell22: 'promotion',
  cell23: 'trainer',
  cell31: 'guitar',
  cell32: 'surgery',
  cell33: 'debt',
  footer1: 'love',
  footer2: 'region',
  footer3: 'agency',
}
