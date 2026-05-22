import type { Meta, StoryObj } from '@storybook/vue3';
import { defineComponent } from 'vue';
import './content-layout.scss';

const layoutPrinciple = {
  title: '内容区组件布局',
  definition:
    '内容区组件布局用于约束 ContentArea 内部的业务模块摆放方式。它不是页面外壳，也不是单个基础组件，而是由卡片、列表、标签、统计、任务、时间线等组件组合形成的内容模块规则。',
  relation:
    '页面规则 / 01 页面框架 负责决定页面壳和 ContentArea 的承载方式；页面规则 / 02 内容区组件布局 负责决定 ContentArea 内部业务信息如何横向、纵向、分组和排列。',
};

const layoutTypes = [
  {
    name: 'Horizontal',
    meta: '横向模块布局',
    usage: '适用于同一层级、需要并排对比或连续操作的信息块，例如任务步骤、筛选摘要、状态卡片、统计卡片、学科入口。',
    rules: [
      '横向模块应保持同一基线和统一高度，信息层级不要忽高忽低。',
      '同组模块之间使用一致间距，优先 12px、16px 或 24px。',
      '横向内容过多时，优先换行或进入横向滚动容器，不压缩到不可读。',
      '卡片内只保留关键摘要和主要状态，复杂内容进入详情页或弹层。',
    ],
  },
  {
    name: 'Vertical',
    meta: '纵向模块布局',
    usage: '适用于信息有上下顺序、状态流转、任务列表、报告列表、日程列表等需要逐条阅读的内容。',
    rules: [
      '纵向模块应保持统一宽度和稳定行高，便于从上到下扫描。',
      '状态标签放在卡片右上或标题同一行，避免打断正文阅读。',
      '主要信息靠上，辅助信息靠下；操作入口收敛到右侧或卡片底部。',
      '列表较长时在容器内部滚动，避免带动整个页面出现多重滚动。',
    ],
  },
  {
    name: 'Card Group',
    meta: '卡片组',
    usage: '适用于多个同类对象的集合展示，例如日程卡、报告卡、任务卡、资源卡、班级卡。',
    rules: [
      '同一卡片组内卡片尺寸、圆角、阴影、内边距保持一致。',
      '卡片组需要明确分组边界，可使用轻量容器或标题区，不要嵌套多层卡片。',
      '新增卡片入口放在卡片组第一项或操作区，样式应弱于真实数据卡片。',
      '卡片数量不足时左对齐排列，不强行拉伸填满整行。',
    ],
  },
  {
    name: 'Info / Metric Card',
    meta: '信息与指标卡',
    usage: '适用于展示关键指标、完成率、学情数据、课程统计、用户摘要等可快速扫读的信息。',
    rules: [
      '核心数字或状态应作为视觉重点，说明文字次级呈现。',
      '同组指标的单位、精度、对齐方式保持一致。',
      '指标卡只表达摘要，不承载复杂筛选或长文本。',
      '状态颜色必须来自设计变量，不为单个业务临时发明颜色。',
    ],
  },
  {
    name: 'Task / Timeline Card',
    meta: '任务与时间线卡',
    usage: '适用于任务流程、日程安排、批改状态、报告进度、时间节点等有状态推进关系的信息。',
    rules: [
      '任务名称、时间、对象、状态按固定顺序出现，避免不同卡片结构跳变。',
      '状态标签优先靠近标题或时间信息，便于快速判断进度。',
      '时间线类信息需要明确当前状态、已完成状态和待处理状态。',
      '卡片操作不超过两个主入口，更多操作进入 Dropdown。',
    ],
  },
  {
    name: 'Subject / Category Tile',
    meta: '学科与分类入口',
    usage: '适用于学科、分类、应用入口等短标签型对象，例如语文、数学、英语、生物、历史等。',
    rules: [
      '色块用于帮助识别分类，不承担复杂状态表达。',
      '同一组分类入口尺寸一致，文字短且可快速识别。',
      '颜色应成组管理，优先沉淀为设计变量或业务色板。',
      '分类入口只用于进入或筛选，不承载长说明和复杂操作。',
    ],
  },
];

const compositionRules = [
  '先判断内容关系：同级对比用 Horizontal，顺序阅读用 Vertical，对象集合用 Card Group。',
  '同一模块内只使用一种主要布局方式，避免横纵混排导致扫描路径混乱。',
  '模块标题、状态、摘要、操作入口要有固定位置，不随业务页面随意漂移。',
  '内容区模块应绑定基础组件和设计变量，例如 Button、Tag、Dropdown、Icon、Table、Pagination。',
  '当模块变复杂时，优先拆到详情页、弹窗或二级页面，不在卡片内无限堆内容。',
];

const ContentLayoutGuidelines = defineComponent({
  name: 'ContentLayoutGuidelines',
  setup() {
    return { layoutPrinciple, layoutTypes, compositionRules };
  },
  template: `
    <main class="content-layout-page">
      <header class="content-layout-page__header">
        <div class="content-layout-page__eyebrow">Page Rules / 02 Content Layout</div>
        <h1 class="content-layout-page__title">页面规则 / 02 内容区组件布局</h1>
        <p class="content-layout-page__description">{{ layoutPrinciple.definition }}</p>
        <p class="content-layout-page__description">{{ layoutPrinciple.relation }}</p>
      </header>

      <section class="content-layout-section">
        <div class="content-layout-section__heading">
          <h2 class="content-layout-section__title">布局分类</h2>
          <p class="content-layout-page__description">
            看到业务页面截图时，先把内容模块归入下面这些类型，再决定是否需要沉淀成组件或模板。
          </p>
        </div>
        <div class="content-layout-grid">
          <article v-for="layout in layoutTypes" :key="layout.name" class="content-layout-card">
            <div class="content-layout-card__preview" :class="'content-layout-card__preview--' + layout.name.toLowerCase().replaceAll(' / ', '-').replaceAll(' ', '-')">
              <span v-for="index in 6" :key="index" />
            </div>
            <h3 class="content-layout-card__title">{{ layout.name }}</h3>
            <div class="content-layout-card__meta">{{ layout.meta }}</div>
            <p class="content-layout-card__body">用途：{{ layout.usage }}</p>
            <ul class="content-layout-checklist">
              <li v-for="rule in layout.rules" :key="rule">{{ rule }}</li>
            </ul>
          </article>
        </div>
      </section>

      <section class="content-layout-section">
        <div class="content-layout-section__heading">
          <h2 class="content-layout-section__title">组合判断规则</h2>
          <p class="content-layout-page__description">
            这些规则用于判断业务内容应该做成横向模块、纵向模块、卡片组，还是继续拆到页面模板。
          </p>
        </div>
        <article class="content-layout-note">
          <ul class="content-layout-checklist">
            <li v-for="rule in compositionRules" :key="rule">{{ rule }}</li>
          </ul>
        </article>
      </section>
    </main>
  `,
});

const meta = {
  title: '页面规则/02 内容区组件布局',
  component: ContentLayoutGuidelines,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '内容区组件布局用于沉淀 ContentArea 内部的横向、纵向、卡片组、指标卡、任务卡和分类入口等业务模块规则。',
      },
    },
  },
} satisfies Meta<typeof ContentLayoutGuidelines>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {};
