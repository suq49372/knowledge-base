import type { Meta, StoryObj } from '@storybook/vue3';
import XueKnowledgeMapCard from '../components/BusinessCards/KnowledgeMapCard.vue';

const meta = {
  title: '业务组件/KnowledgeMapCard',
  component: XueKnowledgeMapCard,
  args: {
    title: '考点地图',
    subtitle: '查看题目关联考点与掌握情况',
    disabled: false,
  },
  argTypes: {
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof XueKnowledgeMapCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Matrix: Story = {
  render: () => ({
    components: { XueKnowledgeMapCard },
    template: `
      <div style="display:grid; gap:20px; width:440px;">
        <XueKnowledgeMapCard />
        <XueKnowledgeMapCard disabled />
      </div>
    `,
  }),
};
