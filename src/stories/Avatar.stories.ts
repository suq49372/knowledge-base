import type { Meta, StoryObj } from '@storybook/vue3';
import XueAvatar from '../components/Avatar/Avatar.vue';

const meta = {
  title: '基础组件/Avatar',
  component: XueAvatar,
  args: {
    shape: 'circle',
    type: 'icon',
    size: 48,
    text: 'A',
  },
  argTypes: {
    shape: { control: 'select', options: ['circle', 'square'] },
    type: { control: 'select', options: ['icon', 'text', 'image'] },
    size: { control: 'number' },
  },
} satisfies Meta<typeof XueAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Matrix: Story = {
  render: () => ({
    components: { XueAvatar },
    template: `
      <div style="display:grid; gap:22px; width:264px;">
        <div style="display:flex; gap:40px; align-items:center;">
          <XueAvatar shape="circle" type="icon" />
          <XueAvatar shape="circle" type="text" text="A" />
          <XueAvatar shape="circle" type="image" />
        </div>
        <div style="display:flex; gap:40px; align-items:center;">
          <XueAvatar shape="square" type="icon" />
          <XueAvatar shape="square" type="text" text="A" />
          <XueAvatar shape="square" type="image" />
        </div>
      </div>
    `,
  }),
};
