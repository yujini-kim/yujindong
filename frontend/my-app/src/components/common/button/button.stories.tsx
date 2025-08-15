import type { Meta, StoryObj } from '@storybook/react'
import Button from './button'

const meta: Meta<typeof Button> = {
    title: 'component/button',
    component: Button,
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'hover', 'enable', 'enableHover', 'accent'],
        },
        children: {
            control: 'text',
        },
        className: {
            table: {
                disable: true,
            },
        },
    },
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
    args: {
        variant: 'default',
        children: '버튼 button',
        onClick: () => alert('클릭됨'),
    },
}

export const Hover: Story = {
    args: {
        variant: 'hover',
        children: '버튼 button',
        onClick: () => alert('클릭됨'),
    },
}

export const Enable: Story = {
    args: {
        variant: 'enable',
        children: '버튼 button',
        onClick: () => alert('클릭됨'),
    },
}

export const EnableHover: Story = {
    args: {
        variant: 'enableHover',
        children: '버튼 button',
        onClick: () => alert('클릭됨'),
    },
}

export const accent: Story = {
    args: {
        variant: 'accent',
        children: '버튼 button',
        onClick: () => alert('클릭됨'),
    },
}
