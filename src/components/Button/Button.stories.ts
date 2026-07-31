import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { UiButton } from './index'

const meta = {
  title: 'Components/Button',
  component: UiButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
    },
    default: {
      control: 'text',
      description: 'Содержимое кнопки (default slot)',
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    type: 'button',
    default: 'Button',
  },
  render: (args) => ({
    components: { UiButton },
    setup: () => ({ args }),
    template: '<UiButton v-bind="args">{{ args.default }}</UiButton>',
  }),
} satisfies Meta<typeof UiButton>

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

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    default: 'Ghost',
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

export const Disabled: Story = {
  args: {
    disabled: true,
    default: 'Disabled',
  },
}
