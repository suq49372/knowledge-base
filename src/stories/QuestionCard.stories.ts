import type { Meta, StoryObj } from '@storybook/vue3';
import XueQuestionCard from '../components/BusinessCards/QuestionCard.vue';

const meta = {
  title: '业务组件/QuestionCard',
  component: XueQuestionCard,
  args: {
    expanded: false,
  },
  argTypes: {
    expanded: { control: 'boolean' },
  },
} satisfies Meta<typeof XueQuestionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Matrix: Story = {
  render: () => ({
    components: { XueQuestionCard },
    template: `
      <div style="display:grid; gap:20px; width:860px;">
        <XueQuestionCard />
        <XueQuestionCard expanded />
      </div>
    `,
  }),
};
