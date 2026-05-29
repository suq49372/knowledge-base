import type { Meta, StoryObj } from '@storybook/vue3';
import { defineComponent } from 'vue';
import './ai-design-workflow.scss';

const workflowRules = [
  {
    title: '1. 先讨论交互，再出 UI',
    body: [
      '每次拿到参考图或需求后，不直接开始画稿。',
      '先确认使用场景、用户角色、业务目标、信息结构和关键操作，再进入 UI 设计。',
      '讨论交互不是复述参考图内容，必须主动拆解用户进入页面的目的、主任务、次任务、异常状态、信息优先级、页面布局和操作路径。',
      '进入 Figma 前，必须输出可供确认的交互判断：页面要解决什么问题、信息如何分组、哪些内容优先呈现、哪些操作前置或降级、不同状态下页面如何变化。',
    ],
    list: [
      '用户目标：用户进来是看数据、处理任务、做配置，还是复核结果？',
      '任务优先级：当前场景的主操作、次操作、低频操作分别是什么？',
      '信息层级：哪些信息是结论，哪些是解释，哪些只是辅助筛选或追溯？',
      '页面结构：至少讨论 2 种布局组织方式，并说明取舍。',
      '状态流转：默认态、完成态、待处理态、异常态、空态分别如何呈现。',
      '组件选择：说明哪些 Storybook 组件适合承载这些信息，哪些组件缺失或需要降级。',
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
      '参考图默认只用于提取数据、文案、业务状态、流程和用户任务，不继承其视觉样式、布局、颜色、卡片形式、间距、信息层级或画板尺寸。',
      '你给什么参考图，我只围绕图中明确出现的功能和场景做设计；只有你明确要求“按参考图视觉还原”时，才允许继承参考图视觉。',
      '不自行补充后续步骤、隐藏页面或未知业务内容。',
    ],
  },
  {
    title: '4. 设计前必须追问',
    body: ['设计前通常先问 3-6 个关键问题，问题必须帮助判断交互结构，而不是只补齐文案。'],
    list: [
      '谁在用？',
      '什么时候用？',
      '用户进来第一眼要判断什么？',
      '主要任务是什么？',
      '主操作应该放在哪里？',
      '哪些信息必须露出，哪些可以折叠、降级或放到详情里？',
      '有哪些完成、待处理、异常、空数据状态？',
      '最终输出给谁看？',
    ],
  },
  {
    title: '5. 先给交互方案，再进 Figma',
    body: [
      '先输出 1-3 个交互方案，并说明各自适合什么场景、优缺点是什么。',
      '交互方案必须包含信息层级、页面布局、用户路径、关键组件、状态组织和主要取舍；不能只说“按参考图布局”或“做成卡片/表格”。',
      '你确认方向后，再生成设计稿。',
    ],
  },
  {
    title: '6. 优先明确页面信息结构',
    body: [
      '设计前优先确认页面的信息组织方式。信息结构确定后，再做视觉布局。',
      '进入 Figma 前必须先说明用户进入页面的目的、主任务、辅助信息、异常信息、数据之间的业务关系，并给出 2-3 种可选页面结构方案供确认。',
    ],
    list: ['按学科组织', '按报告章节组织', '按待办任务组织', '按流程步骤组织', '按数据类型组织', '按行动优先级组织'],
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
    body: 'B 端设计稿默认画板为 1512 × 982，不自行放大到 1920、参考图原图像素或其他尺寸。如果需求是长页面，则宽度仍为 1512px，高度按内容自适应；只有用户明确要求“按参考图同尺寸输出”时，参考图像素才可作为画板尺寸。',
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
    body: '不能凭视觉猜 icon。先查 页面规则/Icon 映射表，再查 Figma Library 的真实 icon 名，最后用 Storybook 的 XueIcon iconMap 校验路径。',
  },
  {
    title: '6. 输出时必须附带审计说明',
    body: '每次交付设计稿时，都要说明哪些是 Library 实例/资产，哪些是 Storybook 组件映射，哪些是 Missing 临时补图形，以及哪些因为字体、权限、组件缺失无法真实引用。',
  },
];

const generationRules = [
  {
    title: '1. Storybook 优先级',
    body: '使用 Storybook 生成 Figma 设计稿时，Storybook 的 token、组件 API、组件状态、iconMap 和默认画板尺寸优先级高于参考图截图。',
    examples: ['默认画板使用 1512 × 982', '参考图 2048 × 922 时不能自动使用 2048 × 922', '颜色、字号、圆角、间距优先读取 --xue-* token'],
  },
  {
    title: '2. 参考图尺寸不等于画板尺寸',
    body: '参考图只用于识别页面内容、信息结构和业务状态，不决定画板尺寸、组件尺寸、行高或控件间距。画板尺寸优先读取 Storybook 页面规则和 --xue-page-width / --xue-page-height；组件尺寸优先读取组件源码和 token。',
    examples: ['参考图像素 2048 × 922，只能作为截图来源信息', 'SearchInput 仍按 Storybook 240 × 36', 'Table 仍按 header 40px / row 48px', 'Pagination 仍按 24px 按钮'],
  },
  {
    title: '3. 组件必须先查再画',
    body: '生成前先查 Storybook 是否已有组件；已有组件必须按组件 API 和状态还原，不能先手动画近似组件。',
    examples: ['XueButton: content / color / size / disabled', 'XueTag: color / styleType / closable / icon', 'XueTabs: variant / size / active item'],
  },
  {
    title: '4. 指标必须先归类再展示',
    body: '遇到多个指标时，必须先分析分母、分子、流程关系、异常归属和行动优先级，再决定合并、分组、降级或突出展示。禁止把参考图里的指标机械平铺成等权重卡片。',
    examples: ['提交率 = 已提交 / 已生成', '批改率 = 已批改 / 已提交', '未生成是生成异常，不应抢批改主任务', '待办指标优先承载主行动'],
  },
  {
    title: '5. 高保真不等于复刻参考图视觉',
    body: '“高保真”指严格基于 Storybook token、组件尺寸、组件状态、Auto Layout 和页面规则生成的高完成度设计稿，不等于复刻参考图视觉。只有用户明确要求“按参考图视觉还原”时，才允许继承参考图的视觉样式。',
    examples: ['参考图只提供数据和业务内容', '组件尺寸仍以 Storybook 源码为准', '页面层级按用户任务重新组织'],
  },
  {
    title: '6. Icon 必须精确映射',
    body: 'Icon 必须先查 页面规则/Icon 映射表。映射表有 componentKey 时使用 Figma 组件实例；componentKey 为空时才允许从 XueIcon 的 iconMap SVG path 生成。禁止用文字、圆形、矩形临时拼近似图标；缺失 icon 必须明确标注。',
    examples: ['工作台 -> grid-fill', '课程资料 -> folder-fill', '作业 -> paper', '帮助 -> question', '云端 -> cloud', '更多 -> more', '图层命名 -> Storybook/XueIcon {name}'],
  },
  {
    title: '7. 页面级缺口要标注',
    body: '如果 Storybook 没有页面级业务组件，可以用基础组件组合，但图层命名必须说明 composed from 哪些 Storybook 组件。',
    examples: ['ClassCard composed from XueTag', 'QuickEntryCard composed from XueIcon + token card', 'DataPanel composed from XueTabs + XueButton + XueTable'],
  },
  {
    title: '8. 必须生成 Auto Layout 版',
    body: 'Figma 设计稿必须优先使用 Auto Layout，禁止整页主要依赖绝对坐标堆图层。绝对定位只允许用于图标细节、装饰元素或特殊遮罩。',
    examples: ['AppShell: horizontal', 'Main: vertical fill', 'ClassList: vertical', 'Toolbar: horizontal', 'Table: vertical + row horizontal'],
  },
  {
    title: '9. Sizing 必须明确',
    body: 'Auto Layout 中每个关键层级都要明确 FIXED / HUG / FILL。表格可以固定列宽，但表格整体、表头和表行必须用 Auto Layout 组织。',
    examples: ['Sidebar fixed 180', 'Topbar fixed 60', 'Main fill', 'Button hug', 'Table row horizontal', 'Table cell fixed width'],
  },
  {
    title: '10. 模块分层不依赖大量分割线',
    body: '模块区分优先使用间距、浅背景、卡片边界和标题层级，不依赖连续横向分割线切碎页面。分割线只用于必要边界，例如 Header 底线、表格行边界。',
    examples: ['Summary 与 Content 用间距区分', 'Queue 用浅背景承载工作区', '避免 Header、卡片、考点、表格之间层层加线'],
  },
  {
    title: '11. 表格必须对齐所属模块',
    body: '表格必须和所属模块内的标题、筛选、搜索保持统一左右内边距；toolbar 与 table 宽度应对齐，表格不能贴模块边缘。',
    examples: ['模块 padding 16px 时，toolbar/table 使用内部内容宽度', 'Tabs、SearchInput、Table 左右边界一致', '表格行宽必须同步表格容器宽度'],
  },
];

const deliveryChecks = [
  {
    title: '1. 节点信息必须返回',
    body: '交付设计稿时必须说明页面名、画板名、nodeId、坐标和尺寸，方便在 Figma 中定位。',
  },
  {
    title: '2. 生成后必须截图校验',
    body: '截图校验不只看整体，还要检查画板尺寸是否来自 Storybook 页面规则而不是参考图原图像素，icon 是否匹配、文本是否溢出、操作列是否换行、模块分割线是否过多、表格左右边距是否和 toolbar 对齐、是否存在多余说明文字。',
  },
  {
    title: '3. Auto Layout 必须验收',
    body: '交付时必须说明关键 Frame 的 Auto Layout 结构，并检查 layoutMode、itemSpacing、padding、layoutSizingHorizontal、layoutSizingVertical。',
  },
  {
    title: '4. 超时后必须确认结果',
    body: 'Figma 写入超时后不能直接重复生成；必须先检查是否实际生成了节点，避免留下多个混乱版本。',
  },
  {
    title: '5. 最终必须做组件审计',
    body: '交付说明必须列出已使用 Storybook 组件、组合组件、缺失组件/图标、是否修改 Storybook；Icon 审计必须说明哪些来自 Figma componentKey，哪些来自 XueIcon SVG path fallback。',
  },
];

const AIDesignWorkflow = defineComponent({
  name: 'AIDesignWorkflow',
  setup() {
    return { workflowRules, lookupSteps, generationRules, deliveryChecks };
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

      <section class="ai-workflow-section">
        <div class="ai-workflow-section__heading">
          <h2 class="ai-workflow-section__title">Storybook 生成 Figma 硬约束</h2>
          <p class="ai-workflow-page__description">
            使用 Storybook 生成 Figma 设计稿时，必须生成可维护的 Auto Layout 版，而不是静态摆放版。
          </p>
        </div>
        <div class="ai-workflow-steps">
          <article v-for="rule in generationRules" :key="rule.title" class="ai-workflow-step">
            <h3 class="ai-workflow-card__title">{{ rule.title }}</h3>
            <p class="ai-workflow-card__body">{{ rule.body }}</p>
            <div v-if="rule.examples" class="ai-workflow-tags">
              <span v-for="example in rule.examples" :key="example">{{ example }}</span>
            </div>
          </article>
        </div>
      </section>

      <section class="ai-workflow-section">
        <div class="ai-workflow-section__heading">
          <h2 class="ai-workflow-section__title">交付验收规则</h2>
          <p class="ai-workflow-page__description">
            设计稿生成完成后，必须同时检查视觉结果、组件映射、Auto Layout 结构和 Figma 定位信息。
          </p>
        </div>
        <div class="ai-workflow-grid">
          <article v-for="check in deliveryChecks" :key="check.title" class="ai-workflow-card">
            <h3 class="ai-workflow-card__title">{{ check.title }}</h3>
            <p class="ai-workflow-card__body">{{ check.body }}</p>
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
