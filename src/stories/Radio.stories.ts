import type { Meta, StoryObj } from '@storybook/vue3';
import XueRadio from '../components/Radio/Radio.vue';

const states = ['unchecked', 'hover', 'checked', 'unchecked-disabled', 'checked-disabled'];

const meta = {
  title: '基础组件/Radio',
  component: XueRadio,
  args: {
    type: 'text',
    label: '单选',
    state: 'unchecked',
  },
  argTypes: {
    type: { control: 'select', options: ['icon', 'text'] },
    state: { control: 'select', options: states },
  },
} satisfies Meta<typeof XueRadio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const States: Story = {
  render: () => ({
    components: { XueRadio },
    setup() {
      return { states };
    },
    template: `
      <div style="display:grid; gap:18px;">
        <div style="display:flex; gap:22px; align-items:center;">
          <XueRadio v-for="state in states" :key="state" type="icon" :state="state" />
        </div>
        <div style="display:flex; gap:22px; align-items:center;">
          <XueRadio v-for="state in states" :key="state" type="text" :state="state" label="单选" />
        </div>
      </div>
    `,
  }),
};
