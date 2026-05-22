import type { Meta, StoryObj } from '@storybook/vue3';
import XueSelectField from '../components/SelectField/SelectField.vue';

const meta = {
  title: '基础组件/Select Field',
  component: XueSelectField,
  args: {
    mode: 'radio',
    state: 'default',
    focus: 'faulse',
    placeholder: '请选择',
    value: '已选择',
    tags: ['选项1', '选项2'],
  },
  argTypes: {
    mode: { control: 'select', options: ['radio', 'multi'] },
    state: { control: 'select', options: ['default', 'focused', 'filled', 'disabled'] },
    focus: { control: 'select', options: ['faulse', 'true', 'error'] },
  },
} satisfies Meta<typeof XueSelectField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const States: Story = {
  render: () => ({
    components: { XueSelectField },
    template: `
      <div style="display:grid; gap:12px; width:260px;">
        <XueSelectField />
        <XueSelectField state="focused" focus="true" />
        <XueSelectField state="focused" focus="error" />
        <XueSelectField state="filled" />
        <XueSelectField state="filled" focus="true" />
        <XueSelectField state="disabled" />
        <div style="height:16px;"></div>
        <XueSelectField mode="multi" />
        <XueSelectField mode="multi" state="focused" />
        <XueSelectField mode="multi" state="focused" focus="error" />
        <XueSelectField mode="multi" state="filled" />
        <XueSelectField mode="multi" state="filled" focus="true" />
        <XueSelectField mode="multi" state="disabled" />
      </div>
    `,
  }),
};
