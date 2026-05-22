import type { Meta, StoryObj } from '@storybook/vue3';
import XueButton from '../components/Button/Button.vue';

const meta = {
  title: '基础组件/Button',
  component: XueButton,
  args: {
    content: 'filled',
    composition: 'text',
    color: 'blue',
    size: 'md',
    disabled: false,
    default: '按钮',
  },
  argTypes: {
    content: { control: 'select', options: ['filled', 'outline', 'textButton'] },
    composition: { control: 'select', options: ['text', 'icon+text', 'icon'] },
    color: { control: 'select', options: ['blue', 'green', 'yellow', 'red', 'gray'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
  render: (args) => ({
    components: { XueButton },
    setup() {
      return { args };
    },
    template: '<XueButton v-bind="args">{{ args.default }}</XueButton>',
  }),
} satisfies Meta<typeof XueButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Matrix: Story = {
  render: () => ({
    components: { XueButton },
    template: `
      <div style="display:grid; gap:16px;">
        <div style="display:flex; gap:12px; align-items:center;">
          <XueButton color="blue">按钮</XueButton>
          <XueButton color="green">按钮</XueButton>
          <XueButton color="yellow">按钮</XueButton>
          <XueButton color="red">按钮</XueButton>
          <XueButton color="gray">按钮</XueButton>
        </div>
        <div style="display:flex; gap:12px; align-items:center;">
          <XueButton content="outline" color="blue">按钮</XueButton>
          <XueButton content="outline" color="gray">按钮</XueButton>
          <XueButton content="textButton" color="red">删除</XueButton>
          <XueButton disabled>按钮</XueButton>
        </div>
      </div>
    `,
  }),
};
