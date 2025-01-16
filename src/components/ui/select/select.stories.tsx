import type { Meta, StoryObj } from '@storybook/react'

import { Select } from './select'

const meta = {
  argTypes: {},
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    options: [
      { label: 'item1', value: 'item1' },
      { label: 'item2', value: 'item2' },
      { label: 'item2', value: 'item3' },
    ],
  },
}
export const WithLabel: Story = {
  args: {
    label: 'label',
    options: [
      { label: 'item1', value: 'item1' },
      { label: 'item2', value: 'item2' },
      { label: 'item2', value: 'item3' },
    ],
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'label',
    options: [
      { label: 'item1', value: 'item1' },
      { label: 'item2', value: 'item2' },
      { label: 'item2', value: 'item3' },
    ],
  },
}

export const SomeDisabled: Story = {
  args: {
    label: 'label',
    options: [
      { disabled: true, label: 'item1', value: 'item1' },
      { label: 'item2', value: 'item2' },
      { label: 'item3', value: 'item3' },
    ],
  },
}

export const Pagination: Story = {
  args: {
    options: [
      { label: '5', value: '5' },
      { label: '10', value: '10' },
      { label: '20', value: '20' },
      { label: '50', value: '50' },
    ],
    pagination: true,
  },
}
