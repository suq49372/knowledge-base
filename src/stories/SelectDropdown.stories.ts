import type { Meta, StoryObj } from '@storybook/vue3';
import XueSelectDropdown from '../components/SelectDropdown/SelectDropdown.vue';

const scrollOptions = ['选项', '选项', '选项', '选项', '选项', '选项', '选项', '选项', '选项', '选项10文字超出示意文字文...'];

const meta = {
  title: '基础组件/Select Dropdown',
  component: XueSelectDropdown,
  parameters: {
    docs: {
      description: {
        component:
          'SelectDropdown 是 SelectField 的专用选项面板，只用于 Select 输入框展开后的普通单列选项列表。关联层级数据选择请使用 SelectCascader，通用操作菜单、图标菜单和筛选浮层请使用 Dropdown。',
      },
    },
  },
  args: {
    type: 'single',
    state: 'hover',
    options: ['选项', '选项', '选项', '选项'],
    scrollbar: true,
  },
  argTypes: {
    type: { control: 'select', options: ['single', 'multiple'] },
    state: { control: 'select', options: ['hover', 'selected', 'scroll', 'empty'] },
  },
} satisfies Meta<typeof XueSelectDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Matrix: Story = {
  render: () => ({
    components: { XueSelectDropdown },
    setup() {
      return { scrollOptions };
    },
    template: `
      <div style="display:grid; grid-template-columns: repeat(2, 240px); gap:16px 40px; align-items:start;">
        <XueSelectDropdown type="single" state="hover" />
        <XueSelectDropdown type="single" state="selected" />
        <XueSelectDropdown type="multiple" state="hover" />
        <XueSelectDropdown type="multiple" state="selected" />
        <XueSelectDropdown type="single" state="scroll" :options="scrollOptions" />
        <XueSelectDropdown type="multiple" state="scroll" :options="scrollOptions" />
        <XueSelectDropdown type="single" state="empty" />
        <XueSelectDropdown type="multiple" state="empty" />
      </div>
    `,
  }),
};
