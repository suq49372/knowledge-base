import type { Meta, StoryObj } from '@storybook/vue3';
import XueTabs from '../components/Tabs/Tabs.vue';

const textItems = [
  { label: '标签', value: 'tab-1' },
  { label: '标签', value: 'tab-2' },
  { label: '标签', value: 'tab-3' },
];

const badgeItems = [
  { label: '标签', value: 'tab-1', badge: 'red' },
  { label: '标签', value: 'tab-2', badge: 'green' },
];

const iconItems = [
  { label: '标签', value: 'tab-1', icon: 'circle-info-fill' },
  { label: '标签', value: 'tab-2', icon: 'circle-check-fill' },
];

const meta = {
  title: '基础组件/Tabs',
  component: XueTabs,
  args: {
    items: textItems,
    modelValue: 'tab-1',
    variant: 'line',
    itemType: 'text',
    size: 'md',
    divider: false,
  },
  argTypes: {
    variant: { control: 'select', options: ['line', 'capsule'] },
    itemType: { control: 'select', options: ['text', 'text-badge', 'text-icon'] },
    size: { control: 'select', options: ['md', 'large'] },
  },
} satisfies Meta<typeof XueTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Variants: Story = {
  render: () => ({
    components: { XueTabs },
    setup() {
      return { textItems, badgeItems, iconItems };
    },
    template: `
      <div style="display:grid; gap:28px; align-items:start;">
        <XueTabs :items="textItems" model-value="tab-1" />
        <XueTabs :items="textItems" model-value="tab-1" divider />
        <XueTabs :items="textItems" model-value="tab-1" size="large" />
        <XueTabs :items="textItems" model-value="tab-1" size="large" divider />
        <div style="display:flex; gap:40px; align-items:center;">
          <XueTabs :items="textItems" model-value="tab-2" variant="capsule" size="large" />
          <XueTabs :items="badgeItems" model-value="tab-2" variant="capsule" item-type="text-badge" size="large" />
          <XueTabs :items="iconItems" model-value="tab-2" variant="capsule" item-type="text-icon" size="large" />
        </div>
      </div>
    `,
  }),
};
