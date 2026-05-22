import type { Meta, StoryObj } from '@storybook/vue3';
import XueTag from '../components/Tag/Tag.vue';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'gray'];

const meta = {
  title: '基础组件/Tag',
  component: XueTag,
  args: {
    color: 'red',
    styleType: 'light',
    closable: false,
    icon: false,
    default: '标签样式',
  },
  argTypes: {
    color: { control: 'select', options: colors },
    styleType: { control: 'select', options: ['light', 'solid'] },
  },
  render: (args) => ({
    components: { XueTag },
    setup() {
      return { args };
    },
    template: '<XueTag v-bind="args">{{ args.default }}</XueTag>',
  }),
} satisfies Meta<typeof XueTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Matrix: Story = {
  render: () => ({
    components: { XueTag },
    setup() {
      return { colors };
    },
    template: `
      <div style="display:grid; gap:16px;">
        <div style="display:flex; gap:24px; flex-wrap:wrap;">
          <XueTag v-for="color in colors" :key="color" :color="color">标签样式</XueTag>
        </div>
        <div style="display:flex; gap:24px; flex-wrap:wrap;">
          <XueTag v-for="color in colors" :key="color" :color="color" style-type="solid">标签样式</XueTag>
        </div>
        <div style="display:flex; gap:24px; flex-wrap:wrap;">
          <XueTag color="gray" closable>标签样式</XueTag>
          <XueTag color="green" icon>标签样式</XueTag>
          <XueTag color="gray" style-type="solid">标签样式</XueTag>
        </div>
      </div>
    `,
  }),
};
