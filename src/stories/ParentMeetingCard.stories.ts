import type { Meta, StoryObj } from '@storybook/vue3';
import XueParentMeetingCard from '../components/BusinessCards/ParentMeetingCard.vue';

const states = ['not-created', 'editable', 'draft', 'finish'];

const meta = {
  title: '业务组件/ParentMeetingCard',
  component: XueParentMeetingCard,
  args: {
    state: 'not-created',
    title: '家长会报告',
    meta: '2024 春季班',
  },
  argTypes: {
    state: { control: 'select', options: states },
  },
} satisfies Meta<typeof XueParentMeetingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Matrix: Story = {
  render: () => ({
    components: { XueParentMeetingCard },
    setup() {
      return { states };
    },
    template: `
      <div style="display:flex; gap:20px; flex-wrap:wrap;">
        <XueParentMeetingCard v-for="state in states" :key="state" :state="state" />
      </div>
    `,
  }),
};
