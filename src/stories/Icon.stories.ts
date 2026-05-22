import type { Meta, StoryObj } from '@storybook/vue3';
import XueIcon from '../components/Icon/Icon.vue';

const iconGroups = [
  {
    title: 'Tips',
    icons: ['plus', 'minus', 'check', 'close', 'question', 'info'],
  },
  {
    title: 'General',
    icons: ['file', 'edit', 'image', 'picture-add', 'qrcode', 'wifi', 'filter', 'safe', 'link', 'unlink', 'location', 'calendar', 'time', 'notice', 'user-plus', 'users'],
  },
  {
    title: 'Direction',
    icons: ['down', 'up', 'right', 'left', 'chevron-left', 'chevron-right', 'menu-unfold', 'menu-fold', 'swap', 'drag', 'undo', 'redo'],
  },
  {
    title: 'Interactive',
    icons: ['crop', 'pen', 'zoom-in', 'zoom-out', 'copy', 'delete', 'search', 'download', 'upload', 'more', 'microphone', 'eye', 'eye-invisible', 'home', 'settings', 'cloud', 'service'],
  },
  {
    title: 'Fill',
    icons: ['circle-plus-fill', 'circle-close-fill', 'circle-check-fill', 'circle-info-fill', 'circle-time-fill', 'grid-fill', 'folder-fill', 'book-fill', 'file-fill', 'play', 'pause'],
  },
  {
    title: 'Business / TOB',
    icons: ['paper', 'courseware', 'outline', 'merged-tutoring', 'concentrate', 'flag-fill', 'rank-fill', 'bulb-fill', 'time-circle-fill', 'thumb-up-hexagon-fill'],
  },
  {
    title: 'Figma Library Aliases',
    icons: ['icon/paper', 'icon/courseware', 'icon/book', 'icon/folder', 'icon/file-fill', 'icon/flag-fill', 'icon/rank-fill', 'icon/bulb-fill', 'icon/merged-tutoring', 'merged-icon/concentrate'],
  },
];

const meta = {
  title: '基础组件/Icon',
  component: XueIcon,
  args: {
    name: 'grid-fill',
    size: 24,
    color: 'var(--xue-text-secondary)',
  },
  argTypes: {
    color: { control: 'color' },
    size: { control: 'number' },
  },
} satisfies Meta<typeof XueIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Gallery: Story = {
  render: () => ({
    components: { XueIcon },
    setup() {
      return { iconGroups };
    },
    template: `
      <div style="display:grid; gap:28px; color:var(--xue-text-secondary); font-family:var(--xue-font-family);">
        <section v-for="group in iconGroups" :key="group.title" style="display:grid; gap:12px;">
          <h3 style="margin:0; color:var(--xue-text-primary); font-size:16px; line-height:22px;">{{ group.title }}</h3>
          <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(112px, 1fr)); gap:12px;">
            <div
              v-for="icon in group.icons"
              :key="icon"
              style="display:grid; gap:8px; justify-items:center; padding:14px 8px; border:1px solid var(--xue-divider); border-radius:var(--xue-radius-8); background:var(--xue-white);"
            >
              <XueIcon :name="icon" :size="28" />
              <span style="max-width:100%; overflow-wrap:anywhere; color:var(--xue-text-tertiary); font-size:12px; line-height:16px;">{{ icon }}</span>
            </div>
          </div>
        </section>
      </div>
    `,
  }),
};
