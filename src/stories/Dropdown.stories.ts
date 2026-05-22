import type { Meta, StoryObj } from '@storybook/vue3';
import XueDropdown from '../components/Dropdown/Dropdown.vue';

const iconActions = [
  { label: '下拉操作', value: 'copy', icon: 'copy' },
  { label: '下拉操作', value: 'edit', icon: 'edit' },
  { label: '下拉操作', value: 'search', icon: 'search' },
  { label: '警示操作', value: 'delete', icon: 'delete', danger: true },
];

const meta = {
  title: '基础组件/Dropdown',
  component: XueDropdown,
  parameters: {
    docs: {
      description: {
        component:
          'Dropdown 是通用下拉浮层，用于操作菜单、图标菜单、复选筛选和多条件筛选。它可以承载 Button、Checkbox 等内容。SelectDropdown 只作为 SelectField 的选项列表使用。',
      },
    },
  },
  args: {
    type: 'text',
    selection: 'single',
  },
  argTypes: {
    type: { control: 'select', options: ['text', 'icon', 'multi-select'] },
    selection: { control: 'select', options: ['single', 'multi'] },
  },
} satisfies Meta<typeof XueDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Variants: Story = {
  render: () => ({
    components: { XueDropdown },
    setup() {
      return { iconActions };
    },
    template: `
      <div style="display:flex; gap:20px; align-items:flex-start;">
        <XueDropdown type="text" selection="single" />
        <XueDropdown type="icon" selection="single" :actions="iconActions" />
        <XueDropdown type="multi-select" selection="single" />
        <XueDropdown type="multi-select" selection="multi" />
      </div>
    `,
  }),
};
