import type { Meta, StoryObj } from '@storybook/vue3';
import { defineComponent } from 'vue';
import XueIcon from '../components/Icon/Icon.vue';
import { iconGenerationPolicy, xueIconMappings } from '../components/Icon/icon-mapping';
import './icon-mapping.scss';

const IconMappingGuide = defineComponent({
  name: 'IconMappingGuide',
  components: { XueIcon },
  setup() {
    return { iconGenerationPolicy, xueIconMappings };
  },
  template: `
    <main class="icon-mapping-page">
      <header class="icon-mapping-page__header">
        <div class="icon-mapping-page__eyebrow">Icon Mapping / XueIcon</div>
        <h1 class="icon-mapping-page__title">Icon 映射表</h1>
        <p class="icon-mapping-page__description">
          这页是 Figma 出稿前必须读取的 icon 映射源。生成设计稿时先按业务场景查表，再使用 Storybook 的 XueIcon name 或已补充的 Figma componentKey。
        </p>
      </header>

      <section class="icon-mapping-section">
        <h2 class="icon-mapping-section__title">生成规则</h2>
        <ol class="icon-mapping-policy">
          <li v-for="rule in iconGenerationPolicy" :key="rule">{{ rule }}</li>
        </ol>
      </section>

      <section class="icon-mapping-section">
        <h2 class="icon-mapping-section__title">业务场景映射</h2>
        <div class="icon-mapping-table">
          <div class="icon-mapping-table__row icon-mapping-table__row--header">
            <span>预览</span>
            <span>业务场景</span>
            <span>Storybook name</span>
            <span>Figma 名称</span>
            <span>componentKey</span>
            <span>状态</span>
          </div>
          <div v-for="item in xueIconMappings" :key="item.scene" class="icon-mapping-table__row">
            <span class="icon-mapping-table__preview">
              <XueIcon :name="item.storybookName" :size="22" />
            </span>
            <span>{{ item.scene }}</span>
            <code>{{ item.storybookName }}</code>
            <span>{{ item.figmaName }}</span>
            <code>{{ item.componentKey || 'pending' }}</code>
            <span>{{ item.status }}</span>
          </div>
        </div>
      </section>
    </main>
  `,
});

const meta = {
  title: '页面规则/Icon 映射表',
  component: IconMappingGuide,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'AI 生成 Figma 设计稿前必须读取的 icon 映射表。componentKey 为空时，按 XueIcon.vue 的 iconMap SVG path 生成，并明确标注不是 Figma 组件实例。',
      },
    },
  },
} satisfies Meta<typeof IconMappingGuide>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {};

