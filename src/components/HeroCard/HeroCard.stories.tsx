import React from 'react'
import { Story, Meta } from '@storybook/react'

import HeroCard from './HeroCard'
import { HeroCardProps } from './HeroCard.types'

export default {
  title: 'Coding12/HeroCard',
  component: HeroCard,
  argTypes: {},
} as Meta<typeof HeroCard>

const Template: Story<HeroCardProps> = (args) => <HeroCard {...args} />

export const Enabled = Template.bind({})
Enabled.args = {
  src: 'https://i.kym-cdn.com/entries/icons/mobile/000/018/012/this_is_fine.jpg',
  disabled: false,
  title: 'Enabled',
  text: 'Enabled Enabled',
}

export const Disabled = Template.bind({})
Disabled.args = {
  src: 'https://i.kym-cdn.com/entries/icons/mobile/000/018/012/this_is_fine.jpg',
  disabled: true,
  title: 'Disabled',
  text: 'Disabled Disabled',
}
