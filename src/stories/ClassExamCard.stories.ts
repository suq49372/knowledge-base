import type { Meta, StoryObj } from '@storybook/vue3';
import XueClassExamCard from '../components/BusinessCards/ClassExamCard.vue';

const meta = {
  title: '业务组件/ClassExamCard',
  component: XueClassExamCard,
  args: {
    type: 'class',
    title: '2023春季数学高阶班',
    meta: '每周四17:00-19:00',
    active: false,
    status: '开课中',
  },
  argTypes: {
    type: { control: 'select', options: ['class', 'exam', 'tab'] },
    active: { control: 'boolean' },
  },
} satisfies Meta<typeof XueClassExamCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Matrix: Story = {
  render: () => ({
    components: { XueClassExamCard },
    template: `
      <div style="display:flex; gap:20px; align-items:flex-start; flex-wrap:wrap; width:680px;">
        <XueClassExamCard active />
        <XueClassExamCard title="2023春季语文高阶班" status="" />
        <XueClassExamCard type="exam" title="2024 春季期中考试" meta="已发布 18 份试卷" />
        <XueClassExamCard type="tab" title="班级" />
      </div>
    `,
  }),
};
