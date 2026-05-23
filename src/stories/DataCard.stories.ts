import type { Meta, StoryObj } from '@storybook/vue3';
import XueDataCard from '../components/BusinessCards/DataCard.vue';

const meta = {
  title: '业务组件/DataCard',
  component: XueDataCard,
  args: {
    title: '数据',
    value: '20',
    description: '已完成',
    layout: 'compact',
    icon: 'rank-fill',
  },
  argTypes: {
    layout: { control: 'select', options: ['compact', 'wide', 'panel'] },
    icon: { control: 'text' },
  },
} satisfies Meta<typeof XueDataCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Matrix: Story = {
  render: () => ({
    components: { XueDataCard },
    template: `
      <div style="display:flex; gap:20px; align-items:flex-start; flex-wrap:wrap;">
        <XueDataCard title="覆盖学员" value="246" description="本周累计" />
        <XueDataCard layout="wide" title="练习完成率" value="86%" description="较上周 +12%" icon="thumb-up-hexagon-fill" />
        <XueDataCard layout="panel" title="趋势数据" value="1,248" description="近 8 周提交量" icon="rank-fill" />
      </div>
    `,
  }),
};
