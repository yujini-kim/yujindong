import type { Meta, StoryObj } from '@storybook/react'
import Input from './input'

const meta: Meta<typeof Input> = {
    title: 'component/Input',
    component: Input,
    args: {
        fieldName: 'email',
        title: '이메일',
        placeholder: '이메일을 입력해주세요',
    },
    argTypes: {
        fieldName: { control: 'text' },
        title: { control: 'text' },
        placeholder: { control: 'text' },
        disabled: { control: 'boolean' },
    },
}
export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {}
