import type { Meta, StoryObj } from '@storybook/vue3';
import XueSidebar from '../components/Sidebar/Sidebar.vue';

const teacherPlatformItems = [
  { label: '工作台', value: 'workspace', icon: 'grid-fill', active: true },
  { label: '学情反馈', value: 'learning-feedback', icon: 'paper' },
  { label: '课中本讲资料', value: 'in-class-materials', icon: 'courseware' },
  { label: '课程资料', value: 'course-materials', icon: 'folder' },
  { label: '作业', value: 'homework', icon: 'file-fill' },
  { label: '服务工具箱', value: 'service-toolbox', icon: 'merged-tutoring' },
  { label: '服务配置', value: 'service-config', icon: 'concentrate' },
  { label: '教学工作', value: 'teaching-work', icon: 'outline' },
  { label: '教学管理', value: 'teaching-management', icon: 'rank-fill' },
  { label: '企业微信', value: 'wechat-work', icon: 'thumb-up-hexagon-fill' },
  { label: '备课中心', value: 'lesson-prep', icon: 'book' },
  { label: '研学', value: 'research-learning', icon: 'flag-fill' },
] as const;

const meta = {
  title: '基础组件/Sidebar',
  component: XueSidebar,
  args: {
    collapsed: false,
    logoText: '老师平台',
  },
} satisfies Meta<typeof XueSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const States: Story = {
  render: () => ({
    components: { XueSidebar },
    template: `
      <div style="display:flex; gap:26px; align-items:flex-start; min-height:620px;">
        <XueSidebar />
        <XueSidebar collapsed />
      </div>
    `,
  }),
};

export const TeacherPlatform: Story = {
  render: () => ({
    components: { XueSidebar },
    setup() {
      return { teacherPlatformItems };
    },
    template: `
      <div style="display:flex; gap:26px; align-items:flex-start; min-height:982px;">
        <XueSidebar :items="teacherPlatformItems" logo-text="老师平台" />
        <XueSidebar :items="teacherPlatformItems" logo-text="老师平台" collapsed />
      </div>
    `,
  }),
};
