import type { Meta, StoryObj } from '@storybook/vue3';
import XueEmptyStateIcon from '../components/EmptyStateIcon/EmptyStateIcon.vue';

const variants = ['data', '404', 'permission', 'package'];

const meta = {
  title: '基础组件/EmptyStateIcon',
  component: XueEmptyStateIcon,
  args: {
    emptyVariant: 'data',
  },
  argTypes: {
    emptyVariant: { control: 'select', options: variants },
  },
} satisfies Meta<typeof XueEmptyStateIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Matrix: Story = {
  render: () => ({
    components: { XueEmptyStateIcon },
    setup() {
      return { variants };
    },
    template: `
      <div style="display:flex; gap:20px; align-items:center;">
        <XueEmptyStateIcon
          v-for="variant in variants"
          :key="variant"
          :empty-variant="variant"
        />
      </div>
    `,
  }),
};
