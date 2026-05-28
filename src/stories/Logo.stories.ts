import type { Meta, StoryObj } from '@storybook/vue3';
import XueLogo from '../components/Logo/Logo.vue';

const meta = {
  title: '基础组件/Logo',
  component: XueLogo,
  args: {
    width: 94,
    alt: '老师平台',
  },
  argTypes: {
    width: { control: 'number' },
  },
  parameters: {
    docs: {
      description: {
        component: '老师平台品牌 Logo。来源 Figma 组件 LOGO- text，node-id 12231:10842，componentKey adf7b1e7cbdec50a76a215c92c6f3eae29603a04。',
      },
    },
  },
} satisfies Meta<typeof XueLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Sizes: Story = {
  render: () => ({
    components: { XueLogo },
    template: `
      <div style="display:flex; gap:32px; align-items:center; padding:24px; background:#eef8ff;">
        <XueLogo :width="94" />
        <XueLogo :width="140" />
        <XueLogo :width="188" />
      </div>
    `,
  }),
};
