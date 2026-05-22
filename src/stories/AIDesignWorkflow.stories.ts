import type { Meta, StoryObj } from '@storybook/vue3';
import { defineComponent } from 'vue';
import './ai-design-workflow.scss';

const workflowRules = [
  {
    title: '1. 先讨论交互，再出 UI',
    body: [
      '每次拿到参考图或需求后，不直接开始画稿。',
      '先确认使用场景、用户角色、业务目标、信息结构和关键操作，再进入 UI 设计。',
    ],
  },
  {
    title: '2. 角色分工',
    body: [
      '你是产品/业务判断者，我是交互与设计执行者。',
      '我负责提出交互方案、信息架构、页面结构和设计取舍；你负责确认业务是否成立、流程是否符合真实使用场景。',
    ],
  },
  {
    title: '3. 参考图使用原则',
    body: [
      '参考图只作为参考，不做无关延展。',
      '你给什么参考图，我只围绕图中明确出现的功能和场景做设计。',
      '不自行补充后续步骤、隐藏页面或未知业务内容。',
    ],
  },
  {
    title: '4. 设计前必须追问',
    body: ['设计前通常先问 3-6 个关键问题。'],
    list: ['谁在用？', '什么时候用？', '主要任务是什么？', '数据从哪里来？', '哪些内容可编辑？', '最终输出给谁看？'],
  },
  {
    title: '5. 先给交互方案，再进 Figma',
    body: [
      '先输出 1-3 个交互方案，并说明各自适合什么场景、优缺点是什么。',
      '你确认方向后，再生成设计稿。',
    ],
  },
  {
    title: '6. 优先明确页面信息结构',
    body: ['设计前优先确认页面的信息组织方式。信息结构确定后，再做视觉布局。'],
    list: ['按学科组织', '按报告章节组织', '按待办任务组织', '按流程步骤组织', '按数据类型组织'],
  },
  {
    title: '7. 设计稿必须同时参考 Figma Library 和 Storybook',
    body: [
      '以后输出设计稿时，必须同时参考 Figma 文件已订阅的 asset library 和 Storybook 组件库。',
      'Figma asset library 决定真实可用资产，Storybook 决定组件语义和业务映射；生成设计稿前必须两边都查，Library 优先落稿，Storybook 负责校准，缺口明确标注。',
    ],
  },
  {
    title: '8. 不随意创造新视觉规范',
    body: [
      '不随意新增颜色、字号、圆角、阴影、按钮样式、表格样式。',
      '除非现有组件库无法满足需求，并且你确认可以扩展。',
    ],
  },
  {
    title: '9. 提前确认设计约束',
    body: ['设计稿尺寸和技术约束要提前确认。'],
    list: ['Web B 端后台', '默认画板 1512 × 982', '是否高度自适应', '是否需要 Auto Layout', '技术栈：Vue 3 + TypeScript + SCSS + Storybook'],
  },
  {
    title: '10. 以真实业务可落地为目标',
    body: [
      '页面不是只追求好看，而要能支持真实用户完成任务，能被前端理解，能沉淀进组件库，后续能持续迭代。',
    ],
  },
  {
    title: '11. 每次设计后复盘组件库',
    body: ['出完设计稿后，一起检查是否产生了新的组件库资产或规则。'],
    list: ['新组件', '新变体', '新状态', '新交互规则', '新页面模板'],
  },
  {
    title: '12. AI 知识库持续迭代',
    body: [
      '每次新增组件、模板、页面规则、交互规则，都要沉淀成可复用说明。',
      '以后再出稿时，要优先调用这些规则，而不是重新猜。',
    ],
  },
];

const lookupSteps = [
  {
    title: '1. 先确认画板规格',
    body: 'B 端设计稿默认画板为 1512 × 982，不自行放大到 1920 或其他尺寸。如果需求是长页面，则宽度仍为 1512px，高度按内容自适应。',
  },
  {
    title: '2. 先查 Figma 文件已订阅的 Library',
    body: '用 get_libraries 查看当前 Figma 文件已添加的组件库。本项目当前优先使用 TOB系统AI测试，再用 search_design_system 查真实可用组件和资产。',
    examples: ['Sidebar', 'Button', 'Table', 'Icon', 'icon/courseware', 'icon/paper', 'icon/folder', 'interactive-button/download'],
  },
  {
    title: '3. 再查 Storybook',
    body: '读取 src/stories/*.stories.ts，确认组件有哪些 story、props、variant、业务场景。',
    examples: ['基础组件/Sidebar/TeacherPlatform', '基础组件/Icon/Business / TOB', '基础组件/Icon/Figma Library Aliases'],
  },
  {
    title: '4. 明确组件使用优先级',
    body: 'Figma Library 有真实组件实例时，优先使用 Library 组件。Storybook 用来确认组件语义、props、业务映射和状态。',
  },
  {
    title: '5. 遵守 Icon 调用规则',
    body: '不能凭视觉猜 icon。先查 Figma Library 的真实 icon 名，再查 Storybook 的 XueIcon 是否支持同名或别名。',
  },
  {
    title: '6. 输出时必须附带审计说明',
    body: '每次交付设计稿时，都要说明哪些是 Library 实例/资产，哪些是 Storybook 组件映射，哪些是 Missing 临时补图形，以及哪些因为字体、权限、组件缺失无法真实引用。',
  },
];

const AIDesignWorkflow = defineComponent({
  name: 'AIDesignWorkflow',
  setup() {
    return { workflowRules, lookupSteps };
  },
  template: `
    <main class="ai-workflow-page">
      <header class="ai-workflow-page__header">
        <div class="ai-workflow-page__eyebrow">Page Rules / 00 AI Design Workflow</div>
        <h1 class="ai-workflow-page__title">页面规则 / 00 AI 出稿协作规则</h1>
        <p class="ai-workflow-page__description">
          这页定义 AI 出 Figma 设计稿前、中、后的协作流程。目标是先确认交互和业务，再使用 Figma Library 与 Storybook 生成可落地设计稿。
        </p>
      </header>

      <section class="ai-workflow-section">
        <div class="ai-workflow-section__heading">
          <h2 class="ai-workflow-section__title">协作原则</h2>
          <p class="ai-workflow-page__description">默认先讨论交互、信息结构和业务目标，再进入 UI 设计。</p>
        </div>
        <div class="ai-workflow-grid">
          <article v-for="rule in workflowRules" :key="rule.title" class="ai-workflow-card">
            <h3 class="ai-workflow-card__title">{{ rule.title }}</h3>
            <p v-for="paragraph in rule.body" :key="paragraph" class="ai-workflow-card__body">{{ paragraph }}</p>
            <ul v-if="rule.list" class="ai-workflow-checklist">
              <li v-for="item in rule.list" :key="item">{{ item }}</li>
            </ul>
          </article>
        </div>
      </section>

      <section class="ai-workflow-section">
        <div class="ai-workflow-section__heading">
          <h2 class="ai-workflow-section__title">Figma Library + Storybook 调用顺序</h2>
          <p class="ai-workflow-page__description">
            Figma asset library 决定真实可用资产，Storybook 决定组件语义和业务映射；生成设计稿前必须两边都查，Library 优先落稿，Storybook 负责校准，缺口明确标注。
          </p>
        </div>
        <div class="ai-workflow-steps">
          <article v-for="step in lookupSteps" :key="step.title" class="ai-workflow-step">
            <h3 class="ai-workflow-card__title">{{ step.title }}</h3>
            <p class="ai-workflow-card__body">{{ step.body }}</p>
            <div v-if="step.examples" class="ai-workflow-tags">
              <span v-for="example in step.examples" :key="example">{{ example }}</span>
            </div>
          </article>
        </div>
      </section>
    </main>
  `,
});

const meta = {
  title: '页面规则/00 AI 出稿协作规则',
  component: AIDesignWorkflow,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'AI 出稿协作规则用于约束从需求、参考图、组件查找、Figma 落稿到组件库复盘的完整流程。',
      },
    },
  },
} satisfies Meta<typeof AIDesignWorkflow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {};
