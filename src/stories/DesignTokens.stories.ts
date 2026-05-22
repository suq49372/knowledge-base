import type { Meta, StoryObj } from '@storybook/vue3';
import { defineComponent } from 'vue';
import { tokenGroups } from '../styles/tokens';
import './design-tokens.scss';

const sampleClassMap = {
  color: '',
  typography: 'token-card__sample--typography',
  radius: 'token-card__sample--radius',
  sizing: 'token-card__sample--sizing',
  spacing: 'token-card__sample--spacing',
  shadow: 'token-card__sample--shadow',
};

const TokenGallery = defineComponent({
  name: 'TokenGallery',
  setup() {
    return { tokenGroups, sampleClassMap };
  },
  template: `
    <main class="token-page">
      <header class="token-page__header">
        <div class="token-page__eyebrow">Figma Variables</div>
        <h1 class="token-page__title">B 端后台设计变量</h1>
        <p class="token-page__description">
          来源节点 myIgUD4SrX8JS70gb9hjEY / 11911:46911，并结合当前已代码化组件可读取到的 Figma variable defs 记录。
        </p>
      </header>

      <section v-for="group in tokenGroups" :key="group.title" class="token-section">
        <div>
          <h2 class="token-section__title">{{ group.title }}</h2>
          <p class="token-section__description">{{ group.description }}</p>
        </div>

        <div class="token-grid">
          <article v-for="token in group.tokens" :key="token.cssVar" class="token-card">
            <div
              class="token-card__sample"
              :class="sampleClassMap[token.type]"
              :style="{ '--token-value': 'var(' + token.cssVar + ')' }"
            >
              <template v-if="token.type === 'typography'">Aa</template>
            </div>

            <div class="token-card__meta">
              <p class="token-card__name">{{ token.name }} · {{ token.value }}</p>
              <p class="token-card__var">{{ token.cssVar }}</p>
              <p class="token-card__figma">{{ token.figma }}</p>
              <p class="token-card__usage">{{ token.usage }}</p>
            </div>
          </article>
        </div>
      </section>
    </main>
  `,
});

const meta = {
  title: '设计变量/Variables',
  component: TokenGallery,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TokenGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {};
