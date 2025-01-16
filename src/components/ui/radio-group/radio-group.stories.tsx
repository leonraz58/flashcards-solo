import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from './radio-group'

const meta = {
  argTypes: {},
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    radioItems: [
      {
        label: 'First item',
        value: 'First item',
      },
      {
        label: 'Second item',
        value: 'Second item',
      },
      {
        label: 'Third item',
        value: 'Third item',
      },
    ],
  },
}

export const WithDisabled: Story = {
  args: {
    radioItems: [
      {
        label: 'First item',
        value: 'First item',
      },
      {
        label: 'Second item',
        value: 'Second item',
      },
      {
        disabled: true,
        label: 'Third item',
        value: 'Third item',
      },
    ],
  },
}
