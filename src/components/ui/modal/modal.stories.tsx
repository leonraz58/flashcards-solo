import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Meta, StoryObj } from '@storybook/react'

import { Modal } from './modal'

const meta = {
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal onOpenChange={setOpen} open={open} title={'Modal'}>
          <div style={{ padding: '20px 60px' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }}>
              <Button>Primary</Button>
            </div>
          </div>
        </Modal>
      </>
    )
  },
}
