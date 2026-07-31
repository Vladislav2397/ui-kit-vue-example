import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { fn } from 'storybook/test'
import { UiChip } from './index'

const meta = {
  title: 'Components/Chip',
  component: UiChip,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
    removable: {
      control: 'boolean',
    },
    default: {
      control: 'text',
      description: 'Содержимое чипа (default slot)',
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    removable: false,
    default: 'Chip',
    onRemove: fn(),
  },
  render: (args) => ({
    components: { UiChip },
    setup: () => ({ args }),
    template: '<UiChip v-bind="args" @remove="args.onRemove">{{ args.default }}</UiChip>',
  }),
} satisfies Meta<typeof UiChip>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    default: 'Primary',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    default: 'Secondary',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    default: 'Outline',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    default: 'Small',
  },
}

export const Medium: Story = {
  args: {
    size: 'md',
    default: 'Medium',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    default: 'Large',
  },
}

export const Removable: Story = {
  args: {
    removable: true,
    default: 'Removable',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    removable: true,
    default: 'Disabled',
  },
}
