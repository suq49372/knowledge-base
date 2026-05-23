import type { Meta, StoryObj } from '@storybook/vue3';
import XueQuickEntryCard from '../components/BusinessCards/QuickEntryCard.vue';

const meta = {
  title: '业务组件/QuickEntryCard',
  component: XueQuickEntryCard,
  args: {
    title: '备课中心',
    subtitle: '去备课',
    icon: 'book-fill',
    tone: 'green',
  },
  argTypes: {
    tone: { control: 'select', options: ['blue', 'green'] },
    icon: { control: 'text' },
  },
} satisfies Meta<typeof XueQuickEntryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Matrix: Story = {
  render: () => ({
    components: { XueQuickEntryCard },
    template: `
      <div style="display:flex; gap:16px; flex-wrap:wrap;">
        <XueQuickEntryCard title="备课中心" subtitle="去备课" icon="book-fill" tone="green" />
        <XueQuickEntryCard title="批改练习" subtitle="5 待批改" icon="paper" />
        <XueQuickEntryCard title="待办任务" subtitle="5 待完成" icon="time-circle-fill" />
        <XueQuickEntryCard title="个人中心" subtitle="查看教练数据" icon="flag-fill" />
      </div>
    `,
  }),
};
