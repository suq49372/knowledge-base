import type { Meta, StoryObj } from '@storybook/vue3';
import XueSelectCascader from '../components/SelectCascader/SelectCascader.vue';

const meta = {
  title: '基础组件/Select Cascader',
  component: XueSelectCascader,
  parameters: {
    docs: {
      description: {
        component:
          'SelectCascader 用于关联层级数据选择，例如省/市/区、公司层级、事物分类。SelectDropdown 只用于 SelectField 的普通单列选项列表。',
      },
    },
  },
  args: {
    state: 'hover',
  },
  argTypes: {
    state: { control: 'select', options: ['hover', 'selected', 'scroll', 'empty'] },
  },
} satisfies Meta<typeof XueSelectCascader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const States: Story = {
  render: () => ({
    components: { XueSelectCascader },
    template: `
      <div style="display:grid; gap:20px; align-items:start;">
        <div style="display:flex; gap:24px; align-items:flex-start; flex-wrap:wrap;">
          <XueSelectCascader state="hover" />
          <XueSelectCascader state="selected" />
        </div>
        <div style="display:flex; gap:24px; align-items:flex-start; flex-wrap:wrap;">
          <XueSelectCascader state="scroll" />
          <XueSelectCascader state="empty" />
        </div>
      </div>
    `,
  }),
};
