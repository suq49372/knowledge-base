import type { Meta, StoryObj } from '@storybook/vue3';
import XuePagination from '../components/Pagination/Pagination.vue';

const meta = {
  title: '基础组件/Pagination',
  component: XuePagination,
  args: {
    current: 1,
    totalPages: 7,
    pageSize: 10,
    showSizeChanger: false,
    showQuickJumper: false,
  },
} satisfies Meta<typeof XuePagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const States: Story = {
  render: () => ({
    components: { XuePagination },
    template: `
      <div style="display:grid; gap:24px;">
        <XuePagination />
        <XuePagination show-size-changer />
        <XuePagination show-size-changer show-quick-jumper />
      </div>
    `,
  }),
};
