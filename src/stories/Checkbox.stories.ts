import type { Meta, StoryObj } from '@storybook/vue3';
import XueCheckbox from '../components/Checkbox/Checkbox.vue';

const states = ['unchecked', 'hover', 'checked', 'indeterminate', 'unchecked-disabled', 'checked-disabled'];

const meta = {
  title: '基础组件/Checkbox',
  component: XueCheckbox,
  args: {
    type: 'text',
    label: '复选框',
    state: 'unchecked',
  },
  argTypes: {
    type: { control: 'select', options: ['icon', 'text'] },
    state: { control: 'select', options: states },
  },
} satisfies Meta<typeof XueCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const States: Story = {
  render: () => ({
    components: { XueCheckbox },
    setup() {
      return { states };
    },
    template: `
      <div style="display:grid; gap:18px;">
        <div style="display:flex; gap:22px; align-items:center;">
          <XueCheckbox v-for="state in states" :key="state" type="icon" :state="state" />
        </div>
        <div style="display:flex; gap:22px; align-items:center;">
          <XueCheckbox v-for="state in states" :key="state" type="text" :state="state" label="复选框" />
        </div>
      </div>
    `,
  }),
};
