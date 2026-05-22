import type { Meta, StoryObj } from '@storybook/vue3';
import XueDateTimeInput from '../components/DateTimeInput/DateTimeInput.vue';

const types = ['date', 'time', 'datetime', 'date-range', 'time-range', 'datetime-range'];
const states = ['placeholder', 'clearable', 'disabled'];

const meta = {
  title: '基础组件/DateTimeInput',
  component: XueDateTimeInput,
  args: {
    type: 'date',
    state: 'placeholder',
  },
  argTypes: {
    type: { control: 'select', options: types },
    state: { control: 'select', options: states },
  },
} satisfies Meta<typeof XueDateTimeInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Matrix: Story = {
  render: () => ({
    components: { XueDateTimeInput },
    setup() {
      return { types, states };
    },
    template: `
      <div style="display:grid; gap:12px; align-items:start;">
        <div v-for="type in types" :key="type" style="display:grid; gap:8px;">
          <div style="color:var(--xue-text-secondary); font-size:12px; line-height:16px;">{{ type }}</div>
          <div style="display:flex; gap:12px; align-items:center; flex-wrap:wrap;">
            <XueDateTimeInput v-for="state in states" :key="state" :type="type" :state="state" />
          </div>
        </div>
      </div>
    `,
  }),
};
