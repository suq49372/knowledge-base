import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import XueSearchInput from '../components/SearchInput/SearchInput.vue';

const meta = {
  title: '基础组件/SearchInput',
  component: XueSearchInput,
  args: {
    placeholder: '搜索',
    state: 'idle',
    clearable: true,
  },
  argTypes: {
    state: { control: 'select', options: ['idle', 'focused', 'filled', 'disabled'] },
  },
  render: (args) => ({
    components: { XueSearchInput },
    setup() {
      const value = ref(['focused', 'filled'].includes(String(args.state)) ? '已输入' : '');
      return { args, value };
    },
    template: '<XueSearchInput v-bind="args" v-model="value" />',
  }),
} satisfies Meta<typeof XueSearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const States: Story = {
  render: () => ({
    components: { XueSearchInput },
    setup() {
      const value = ref('已输入');
      return { value };
    },
    template: `
      <div style="display:grid; gap:12px; width:260px;">
        <XueSearchInput placeholder="搜索" />
        <XueSearchInput v-model="value" state="focused" />
        <XueSearchInput v-model="value" state="filled" />
        <XueSearchInput state="disabled" placeholder="搜索" />
      </div>
    `,
  }),
};
