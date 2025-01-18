import { Meta, StoryObj } from '@storybook/react'

import { Tabs } from './tabs'

const meta = {
  argTypes: {},
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Tabs',
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    tabs: [{ value: 'tab1' }, { value: 'tab2' }, { value: 'tab3' }],
  },
}

export const DefaultWithTitle: Story = {
  args: {
    tabs: [{ value: 'tab1' }, { value: 'tab2' }, { value: 'tab3' }],
    title: 'title',
  },
}

export const WithDisabled: Story = {
  args: {
    tabs: [{ value: 'tab1' }, { value: 'tab2' }, { disabled: true, value: 'tab3' }],
    title: 'title',
  },
}
