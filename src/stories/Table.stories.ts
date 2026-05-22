import type { Meta, StoryObj } from '@storybook/vue3';
import XueTable from '../components/Table/Table.vue';

const columns = [
  { key: 'student', title: '学员' },
  { key: 'address', title: '地址', sortable: true },
  { key: 'year', title: '年份', sortable: true },
  { key: 'phone', title: '电话', sortable: true },
  { key: 'email', title: '邮箱', sortable: true },
];

const data = [
  { student: '姓名', address: '北京市海淀区中关村大街', year: '2024', phone: '10013405700', email: '12345@gmail.com' },
  { student: '姓名', address: '北京市海淀区中关村大街', year: '2024', phone: '10013405700', email: '12345@gmail.com' },
  { student: '姓名', address: '北京市海淀区中关村大街', year: '2024', phone: '10013405700', email: '12345@gmail.com' },
  { student: '姓名', address: '北京市海淀区中关村大街', year: '2024', phone: '10013405700', email: '12345@gmail.com' },
];

const meta = {
  title: '基础组件/Table',
  component: XueTable,
  args: {
    columns,
    data,
    selectable: false,
    actions: false,
    empty: false,
    bordered: false,
    scrollX: false,
    groupedHeader: false,
  },
} satisfies Meta<typeof XueTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Matrix: Story = {
  render: () => ({
    components: { XueTable },
    setup() {
      return { columns, data };
    },
    template: `
      <div style="display:grid; gap:24px; width:960px;">
        <XueTable :columns="columns" :data="data" />
        <XueTable :columns="columns" :data="data" selectable actions />
        <XueTable :columns="columns" :data="data" selectable actions scroll-x />
        <XueTable :columns="columns" empty />
        <XueTable :columns="columns" :data="data" selectable bordered grouped-header />
      </div>
    `,
  }),
};
