import type { Meta, StoryObj } from '@storybook/vue3';
import XueResultCard from '../components/BusinessCards/ResultCard.vue';

const meta = {
  title: '业务组件/ResultCard',
  component: XueResultCard,
  args: {
    title: '生成成功',
    description: '内容已生成，可继续编辑或查看详情。',
    actionText: '查看详情',
  },
} satisfies Meta<typeof XueResultCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Matrix: Story = {
  render: () => ({
    components: { XueResultCard },
    template: `
      <div style="display:flex; gap:20px;">
        <XueResultCard />
        <XueResultCard title="保存成功" description="修改内容已保存。" action-text="继续编辑" />
      </div>
    `,
  }),
};
