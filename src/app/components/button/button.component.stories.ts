import { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

/* 
┌──────────────────────────────────────┐
│              PRIMARY                 │
├───────────┬───────────┬──────────────┤
│   Small   │  Medium   │    Large     │
└───────────┴───────────┴──────────────┘

States:
[ Normal ]  [ Hover ]  [ Active ]  [ Focus ]  [ Disabled ]

Variants:
┌───────────┐  ┌───────────┐  ┌───────────┐
│  Primary  │  │ Secondary │  │ Tertiary  │
└───────────┘  └───────────┘  └───────────┘

With Icons:
┌───────────────────┐  ┌───────────────────┐
│  ← Icon + Text    │  │  Text + Icon →    │
└───────────────────┘  └───────────────────┘

Loading State:
┌───────────────────┐
│  [spinner] Loading│
└───────────────────┘
*/

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary']
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    },
    iconLeft: {
      control: 'text',
      description: 'Material icon name for left icon'
    },
    iconRight: {
      control: 'text',
      description: 'Material icon name for right icon'
    },
    clicked: { 
      action: 'clicked',
      description: 'Event emitted when button is clicked'
    }
  },
  args: {
    label: 'Button',
    variant: 'primary',
    size: 'medium',
    disabled: false,
    loading: false,
    iconLeft: undefined,
    iconRight: undefined,
    href: undefined
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Secondary Button'
  }
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    label: 'Tertiary Button'
  }
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Small Button'
  }
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Large Button'
  }
};

export const WithLeftIcon: Story = {
  args: {
    iconLeft: "bed",
    label: 'Home'
  }
};

export const WithRightIcon: Story = {
  args: {
    iconRight: 'arrow_forward',
    label: 'Continue'
  }
};

export const WithBothIcons: Story = {
  args: {
    iconLeft: 'save',
    iconRight: 'check',
    label: 'Save & Confirm'
  }
};

export const Loading: Story = {
  args: {
    loading: true,
    label: 'Processing...'
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled Button'
  }
};

export const AsLink: Story = {
  args: {
    href: 'https://example.com',
    target: '_blank',
    label: 'Open Link'
  }
};

export const IconOnly: Story = {
  args: {
    iconLeft: 'favorite',
    label: '',
  }
};