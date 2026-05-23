import type { Meta, StoryObj } from '@storybook/vue3';
import XuePageHeaderContent from '../components/BusinessCards/PageHeaderContent.vue';

const meta = {
  title: '业务组件/PageHeaderContent',
  component: XuePageHeaderContent,
  args: {
    title: '页面标题',
    activeTab: 'overview',
  },
  argTypes: {
    activeTab: { control: 'select', options: ['overview', 'todo', 'done'] },
  },
} satisfies Meta<typeof XuePageHeaderContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Matrix: Story = {
  render: () => ({
    components: { XuePageHeaderContent },
    template: `
      <div style="display:grid; gap:20px;">
        <XuePageHeaderContent title="题库管理" />
        <XuePageHeaderContent title="报告管理" active-tab="todo" />
      </div>
    `,
  }),
};
