import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Slider } from './slider'

const meta = {
  argTypes: {},
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    max: 100,
    min: 1,

    value: [20, 50],
  },
  render: args => {
    const [values, setValues] = useState(args.value)

    const onChange = (values: number[]) => {
      setValues(values)
    }

    return <Slider max={args.max} min={args.min} onValueChange={onChange} value={values} />
  },
}
