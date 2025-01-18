import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Meta, StoryObj } from '@storybook/react'

import { Dialog } from './dialog'

const meta = {
  component: Dialog,
  tags: ['autodocs'],
  title: 'Components/Dialog',
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Dialog',
  },
  render: args => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Dialog {...args} onOpenChange={setOpen} open={open}>
          <div style={{ padding: '20px 60px' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </div>
        </Dialog>
      </>
    )
  },
}
