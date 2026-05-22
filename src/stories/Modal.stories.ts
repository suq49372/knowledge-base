import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import XueModal from '../components/Modal/Modal.vue';
import XueButton from '../components/Button/Button.vue';

const meta = {
  title: '基础组件/Modal',
  component: XueModal,
  args: {
    size: 'medium',
    title: '保存配置',
    cancelText: '取消',
    confirmText: '保存',
  },
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large', 'max'] },
  },
  render: (args) => ({
    components: { XueModal, XueButton },
    setup() {
      const open = ref(false);
      return { args, open };
    },
    template: `
      <XueButton @click="open = true">打开弹窗</XueButton>
      <XueModal v-bind="args" v-model:open="open">
        <div style="display:grid; min-height:160px; place-items:center; background:var(--xue-surface); color:var(--xue-text-secondary);">
          内容区
        </div>
      </XueModal>
    `,
  }),
} satisfies Meta<typeof XueModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
