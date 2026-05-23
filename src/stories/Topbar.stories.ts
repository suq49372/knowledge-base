import type { Meta, StoryObj } from '@storybook/vue3';
import XueTopbar from '../components/Topbar/Topbar.vue';

const meta = {
  title: '基础组件/Topbar',
  component: XueTopbar,
  args: {
    title: '页面名称',
    userName: '姓名',
    avatarShape: 'circle',
    avatarType: 'icon',
    avatarText: 'A',
  },
  argTypes: {
    avatarShape: { control: 'select', options: ['circle', 'square'] },
    avatarType: { control: 'select', options: ['icon', 'text', 'image'] },
  },
} satisfies Meta<typeof XueTopbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => ({
    components: { XueTopbar },
    setup() {
      return { args };
    },
    template: '<div style="width:1024px;"><XueTopbar v-bind="args" /></div>',
  }),
};

export const Matrix: Story = {
  render: () => ({
    components: { XueTopbar },
    template: `
      <div style="display:grid; gap:20px; width:1024px;">
        <XueTopbar title="页面名称" user-name="姓名" />
        <XueTopbar title="页面名称" user-name="姓名" avatar-type="text" avatar-text="A" />
        <XueTopbar title="页面名称" user-name="姓名" avatar-type="image" />
      </div>
    `,
  }),
};
