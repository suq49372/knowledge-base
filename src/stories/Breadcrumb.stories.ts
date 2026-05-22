import type { Meta, StoryObj } from '@storybook/vue3';
import XueBreadcrumb from '../components/Breadcrumb/Breadcrumb.vue';

const deepItems = [
  { label: '首页', href: '#' },
  { label: '二级页面', href: '#' },
  { label: '三级页面', href: '#' },
  { label: '四级页面', href: '#' },
  { label: '五级页面', href: '#' },
  { label: '六级页面' },
];

const meta = {
  title: '基础组件/Breadcrumb',
  component: XueBreadcrumb,
  args: {
    items: [
      { label: '首页', href: '#' },
      { label: '二级页面' },
    ],
    state: 'idle',
  },
  argTypes: {
    state: { control: 'select', options: ['idle', 'more'] },
  },
} satisfies Meta<typeof XueBreadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const States: Story = {
  render: () => ({
    components: { XueBreadcrumb },
    setup() {
      return { deepItems };
    },
    template: `
      <div style="display:grid; gap:24px;">
        <XueBreadcrumb />
        <XueBreadcrumb state="more" :items="deepItems" />
      </div>
    `,
  }),
};
