import React from 'react';
import { Story, Meta } from '@storybook/react';

import Table  from './Table';
import {TableProps} from "./Table.types";

export default {
  title: 'Coding12/Table',
  component: Table,
  argTypes: {},
} as Meta<typeof Table>;

const Template: Story<TableProps> = (args) => <Table {...args} />;

export const Enabled = Template.bind({});
Enabled.args = {
  backgroundColor: "#9999AA",
  disabled: false,
  header1: "coffee",
  header2: "data",
  header3: "tooth",
  cell_11: "strategy",
  cell_12: "farmer",
  cell_13: "hall",
  cell_21: "bathroom",
  cell_22: "promotion",
  cell_23: "trainer",
  cell_31: "guitar",
  cell_32: "surgery",
  cell_33: "debt",
  footer1: "love",
  footer2: "region",
  footer3: "agency",
};

export const Disabled = Template.bind({});
Disabled.args = {
  backgroundColor: "#9999AA",
  disabled: true,
  header1: "coffee",
  header2: "data",
  header3: "tooth",
  cell_11: "strategy",
  cell_12: "farmer",
  cell_13: "hall",
  cell_21: "bathroom",
  cell_22: "promotion",
  cell_23: "trainer",
  cell_31: "guitar",
  cell_32: "surgery",
  cell_33: "debt",
  footer1: "love",
  footer2: "region",
  footer3: "agency",
};