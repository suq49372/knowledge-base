import type { Meta, StoryObj } from '@storybook/vue3';
import XueSwitch from '../components/Switch/Switch.vue';

const meta = {
  title: '基础组件/Switch',
  component: XueSwitch,
  args: {
    modelValue: false,
    size: 'small',
  },
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
  },
} satisfies Meta<typeof XueSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const States: Story = {
  render: () => ({
    components: { XueSwitch },
    template: `
      <div style="display:flex; gap:24px; align-items:center;">
        <XueSwitch size="small" />
        <XueSwitch size="small" model-value />
        <XueSwitch size="medium" />
        <XueSwitch size="medium" model-value />
        <XueSwitch size="large" />
        <XueSwitch size="large" model-value />
      </div>
    `,
  }),
};
