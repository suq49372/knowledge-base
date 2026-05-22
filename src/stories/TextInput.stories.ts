import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import XueTextInput from '../components/TextInput/TextInput.vue';

const meta = {
  title: '基础组件/TextInput',
  component: XueTextInput,
  args: {
    placeholder: '请输入',
    states: 'basic',
    size: 'mid',
    type: 'basic',
    focus: 'faulse',
    clearable: true,
    maxLength: 20,
  },
  argTypes: {
    states: { control: 'select', options: ['basic', 'filled', 'disabled', 'textarea'] },
    size: { control: 'select', options: ['small', 'mid'] },
    type: { control: 'select', options: ['basic', 'count'] },
    focus: { control: 'select', options: ['faulse', 'true'] },
  },
  render: (args) => ({
    components: { XueTextInput },
    setup() {
      const value = ref(args.states === 'filled' ? '已输入' : '');
      return { args, value };
    },
    template: '<XueTextInput v-bind="args" v-model="value" />',
  }),
} satisfies Meta<typeof XueTextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const States: Story = {
  render: () => ({
    components: { XueTextInput },
    setup() {
      const filled = ref('已输入内容');
      const empty = ref('');
      return { empty, filled };
    },
    template: `
      <div style="display:grid; gap:12px; width:260px;">
        <XueTextInput placeholder="请输入" />
        <XueTextInput placeholder="请输入" focus="true" />
        <XueTextInput v-model="filled" states="filled" />
        <XueTextInput states="disabled" placeholder="请输入" />
        <XueTextInput v-model="filled" states="filled" focus="true" />
        <XueTextInput v-model="filled" type="count" />
        <XueTextInput v-model="empty" type="count" states="textarea" placeholder="请输入" />
        <XueTextInput placeholder="请输入" size="small" />
        <XueTextInput placeholder="请输入" size="small" focus="true" />
        <XueTextInput v-model="filled" states="filled" size="small" />
        <XueTextInput states="disabled" size="small" placeholder="请输入" />
        <XueTextInput v-model="filled" states="filled" size="small" focus="true" />
      </div>
    `,
  }),
};
