import type { Meta, StoryObj } from '@storybook/vue3';
import { defineComponent } from 'vue';
import './page-layout.scss';

const source = {
  fileKey: 'myIgUD4SrX8JS70gb9hjEY',
  appShellNode: '12232:13738',
  sidebarNode: '12232:13880',
  topbarNode: '12232:14071',
  contentLayoutsNode: '12232:13734',
  baseline: '1512 x 982',
};

const appShellRules = {
  title: 'AppShell',
  meta: 'Sidebar + Topbar + ContentArea',
  definition:
    'AppShell 是 B 端后台页面最外层页面壳。以左侧导航承载主功能分组，以顶部栏承载全局操作，以内容区承载业务页面。',
  usage: [
    '适用于功能模块较多、层级复杂、存在二级或三级导航的后台系统。',
    '适用于需要全局入口的系统，例如用户、通知、帮助、设置等。',
    '不适合单任务沉浸式流程页，例如全屏编辑器；移动端单栏场景应切换为抽屉导航。',
  ],
  rules: [
    'Sidebar 固定在左侧，默认展开，可收起。',
    'Topbar 固定在内容区上方，用于全局功能，不承载业务二级导航。',
    'ContentArea 独立滚动，Sidebar 与 Topbar 保持可见。',
    '一级导航用于模块切换，二级/三级导航用于模块内页面切换。',
    '视口变窄时，优先收起 Sidebar，再压缩内容区留白。',
  ],
};

const sidebarRules = {
  title: 'Sidebar',
  meta: 'expanded 180px / collapsed 72px',
  definition: 'Sidebar 是主功能模块入口，支持多级嵌套、分组、当前选中态和收起态。',
  usage: [
    '用于全局一级模块和模块内二级页面导航。',
    '展开态用于需要识别菜单名称的后台系统；收起态用于释放高密度内容页的横向空间。',
    '菜单数量较多时，导航区内部滚动，不能带动 ContentArea 一起滚动。',
  ],
  rules: [
    '展开态宽度 180px，Logo 区在顶部，菜单容器左右留 16px，菜单项宽度 148px，高度 36px。',
    '收起态宽度 72px，仅保留图标和必要的悬浮提示。',
    '当前页面所属菜单必须有明确选中态；hover、展开、禁用状态需与组件库 Sidebar 保持一致。',
    'Sidebar 只放导航，不放筛选、表格操作、页面主按钮和业务数据。',
  ],
};

const topbarRules = {
  title: 'Topbar',
  meta: 'height 60px',
  definition: 'Topbar 是全局功能区，用于承载用户信息、通知、帮助、设置等跨页面入口。',
  usage: [
    '用于 AppShell 顶部，和 Sidebar 共同形成稳定页面壳。',
    '可承载全局工具、账号入口、帮助入口、通知入口，必要时可放面包屑或全局搜索。',
    '不承载业务筛选、批量操作、表格工具或页面主体内容。',
  ],
  rules: [
    'Topbar 高度统一为 60px，宽度随 Sidebar 后的主区域自适应。',
    'Topbar 固定在 ContentArea 上方，页面滚动时保持可见。',
    '业务标题、筛选项和主要操作放入 ContentArea，不在 Topbar 中重复出现。',
    '右侧全局工具数量应克制，过多入口需要收敛到 Dropdown。',
  ],
};

const contentAreaRules = {
  title: 'ContentArea',
  meta: 'outer padding 24px / module gap 16-20px',
  definition:
    'ContentArea 是业务页面容器，承载列表、详情、表单、看板、画布、空状态等具体页面内容。',
  usage: [
    '用于组织页面标题、筛选区、操作区、主体数据区、分页和反馈状态。',
    '内容区使用浅灰页面底，业务模块优先使用白色容器承载。',
    '具体内容布局通过 ContentArea Layouts 选择，而不是每个页面临时重排。',
  ],
  rules: [
    '默认页面外边距 24px，模块之间优先使用 16px 或 20px 间距。',
    'ContentArea 是默认主滚动区，Sidebar 和 Topbar 不参与主体滚动。',
    '页面标题、筛选、操作、主体数据和分页应保持稳定阅读顺序。',
    '不要在内容区中嵌套过多层卡片，避免页面结构碎片化。',
  ],
};

const contentAreaLayouts = [
  {
    name: 'L-SIDEBAR-TOP-SINGLE',
    meta: 'Top area + single full-width body',
    usage: '适用于标准列表、筛选表格、表单编辑、设置页和简单详情页。',
    structure: 'Sidebar 180 + Topbar 60 + ContentArea；内容区包含顶部条件/操作区和一个完整主体内容区。',
    rules: [
      '主体内容只有一个主容器，避免拆出无意义的左右栏。',
      '筛选、搜索、创建、导出等操作放在主体上方，并与数据区域保持 16-20px 间距。',
      '表格页分页跟随表格底部；表单页操作跟随底部或固定在可见区域。',
      '当页面需要范围选择时，改用 L-SIDEBAR-SPLIT 或 L-SIDEBAR-TOP-SPLIT。',
    ],
  },
  {
    name: 'L-SIDEBAR-TOP-SPLIT',
    meta: 'Top area + left panel + main body',
    usage:
      '适用于“顶部概览/筛选 + 左侧对象列表/树 + 右侧主内容”的复合管理页，例如班级、组织、课程范围选择后查看明细。',
    structure:
      'Sidebar 180 + Topbar 60 + ContentArea；内容区上方 120px 放页面上下文或条件区，下方左右分栏：左侧 280px，右侧自适应。',
    rules: [
      '左侧分栏只放范围选择、对象列表、目录树或分组，不放页面主操作。',
      '右侧区域承载表格、详情、画布或业务主流程，是主要操作区。',
      '左侧分栏和右侧主体各自允许内部滚动，避免整页和局部同时抢滚动。',
      '顶部区用于筛选、步骤、摘要或页面级操作，不要堆叠过多卡片。',
    ],
  },
  {
    name: 'L-SIDEBAR-SPLIT',
    meta: 'Left panel + single main body',
    usage:
      '适用于“左侧选择范围/对象，右侧展示单一主内容”的页面，例如目录树 + 表格、分类 + 明细、组织范围 + 数据列表。',
    structure:
      'Sidebar 180 + Topbar 60 + ContentArea；内容区为左侧 280px 分栏 + 右侧自适应主体，不包含额外顶部筛选区。',
    rules: [
      '左侧分栏只承担范围选择、对象列表、目录树或分类导航，不放页面级主操作。',
      '右侧主体保持一个主阅读焦点，可承载表格、详情、配置区或空状态。',
      '当右侧需要复杂筛选或步骤说明时，升级为 L-SIDEBAR-TOP-SPLIT。',
      '左右区域滚动边界独立；左侧长列表内部滚动，右侧主体按业务内容滚动。',
    ],
  },
  {
    name: 'L-SIDEBAR-FULL',
    meta: 'Single full-width body',
    usage: '适用于需要最大横向空间的单主体页面，例如大表格、数据看板、编辑画布、批量处理工作台。',
    structure:
      'Sidebar 180 + Topbar 60 + ContentArea；内容区内部为单一全宽主体容器，不拆分顶部区或左右栏。',
    rules: [
      '主内容横向空间优先给表格、画布、看板或复杂编辑区域。',
      '筛选和操作应收敛到主体容器顶部工具栏，避免额外占用页面层级。',
      '横向溢出只允许在主体容器内部滚动，不让整个页面横向滚动。',
      '当页面需要范围选择时，改用 L-SIDEBAR-SPLIT；当需要顶部筛选区时，改用 L-SIDEBAR-TOP-SINGLE。',
    ],
  },
  {
    name: 'L-SIDEBAR-GRID',
    meta: 'Card grid body',
    usage: '适用于卡片集合、资源选择、应用入口、指标概览等需要横向扫描多个对象的页面。',
    structure:
      'Sidebar 180 + Topbar 60 + ContentArea；内容区使用统一卡片栅格，卡片等宽等高排列。',
    rules: [
      '卡片间距保持一致，推荐 16px 或 24px；同一页面不要混用过多卡片尺寸。',
      '卡片内容只放关键信息和少量操作，复杂操作进入详情页或 Dropdown。',
      '筛选和排序放在栅格上方，分页或加载更多放在列表末尾。',
      '卡片数量不足时保持左对齐，不强行拉伸填满整行。',
    ],
  },
];

const scrollAreaDefinition =
  'Scroll Area 定义页面滚动边界。默认情况下，Sidebar 与 Topbar 固定，ContentArea 作为主滚动区；当局部内容溢出时，滚动应收敛在对应组件内部，例如 Sidebar 菜单、Table 表体、Modal 内容区。禁止页面同时出现多个竞争性的纵向滚动区。';

const scrollAreaRules = [
  'Sidebar 菜单过多时，滚动发生在 Sidebar 内部，不能带动 ContentArea 一起滚动。',
  'ContentArea 是默认主滚动区，承载页面主体内容的纵向溢出。',
  'Table 横向或纵向溢出时，滚动收敛在 Table 表体或表格容器内部。',
  'Modal 内容过长时，滚动发生在 Modal 内容区，头部和底部操作区保持可见。',
];

const PageFrameworkGuidelines = defineComponent({
  name: 'PageFrameworkGuidelines',
  setup() {
    return {
      source,
      appShellRules,
      sidebarRules,
      topbarRules,
      contentAreaRules,
      contentAreaLayouts,
      scrollAreaDefinition,
      scrollAreaRules,
    };
  },
  template: `
    <main class="layout-page">
      <header class="layout-page__header">
        <div class="layout-page__eyebrow">Page Rules / 01 Framework</div>
        <h1 class="layout-page__title">页面规则 / 01 页面框架</h1>
        <p class="layout-page__description">
          结构：AppShell / Sidebar / Topbar / ContentArea / ContentArea Layouts / Scroll Area。
          本页用于约束 AI 生成 B 端后台页面时的外层框架和内容区布局选择。
        </p>
      </header>

      <section class="layout-section">
        <div class="layout-section__heading">
          <h2 class="layout-section__title">AppShell</h2>
          <p class="layout-page__description">{{ appShellRules.definition }}</p>
        </div>
        <div class="layout-framework">
          <div class="layout-shell-demo" aria-label="AppShell wireframe">
            <aside class="layout-shell-demo__sidebar">
              <span class="layout-shell-demo__logo" />
              <span v-for="index in 9" :key="index" class="layout-shell-demo__nav" />
            </aside>
            <div class="layout-shell-demo__main">
              <header class="layout-shell-demo__topbar">
                <span class="layout-shell-demo__crumb" />
                <span class="layout-shell-demo__tools">
                  <span class="layout-shell-demo__tool" />
                  <span class="layout-shell-demo__tool" />
                  <span class="layout-shell-demo__tool" />
                </span>
              </header>
              <section class="layout-shell-demo__content">
                <span class="layout-shell-demo__page-title" />
                <span class="layout-shell-demo__filter" />
                <span class="layout-shell-demo__table" />
                <span class="layout-shell-demo__pagination" />
              </section>
            </div>
          </div>

          <aside class="layout-spec-card">
            <div class="layout-spec-card__label">Figma source</div>
            <strong>{{ source.baseline }}</strong>
            <p>AppShell node: {{ source.appShellNode }}</p>
            <p>{{ appShellRules.meta }}</p>
          </aside>
        </div>
        <div class="layout-section--split">
          <article class="layout-anatomy__note">
            <h3 class="layout-rule__title">适用场景</h3>
            <ul class="layout-checklist">
              <li v-for="item in appShellRules.usage" :key="item">{{ item }}</li>
            </ul>
          </article>
          <article class="layout-anatomy__note">
            <h3 class="layout-rule__title">关键规则</h3>
            <ul class="layout-checklist">
              <li v-for="item in appShellRules.rules" :key="item">{{ item }}</li>
            </ul>
          </article>
        </div>
      </section>

      <section class="layout-section">
        <div class="layout-section__heading">
          <h2 class="layout-section__title">Sidebar</h2>
          <p class="layout-page__description">{{ sidebarRules.definition }}</p>
        </div>
        <article class="layout-rule layout-rule--wide">
          <h3 class="layout-rule__title">{{ sidebarRules.title }}</h3>
          <div class="layout-rule__meta">{{ sidebarRules.meta }} · Figma {{ source.sidebarNode }}</div>
          <div class="layout-two-column">
            <ul class="layout-checklist">
              <li v-for="item in sidebarRules.usage" :key="item">{{ item }}</li>
            </ul>
            <ul class="layout-checklist">
              <li v-for="item in sidebarRules.rules" :key="item">{{ item }}</li>
            </ul>
          </div>
        </article>
      </section>

      <section class="layout-section">
        <div class="layout-section__heading">
          <h2 class="layout-section__title">Topbar</h2>
          <p class="layout-page__description">{{ topbarRules.definition }}</p>
        </div>
        <article class="layout-rule layout-rule--wide">
          <h3 class="layout-rule__title">{{ topbarRules.title }}</h3>
          <div class="layout-rule__meta">{{ topbarRules.meta }} · Figma {{ source.topbarNode }}</div>
          <div class="layout-two-column">
            <ul class="layout-checklist">
              <li v-for="item in topbarRules.usage" :key="item">{{ item }}</li>
            </ul>
            <ul class="layout-checklist">
              <li v-for="item in topbarRules.rules" :key="item">{{ item }}</li>
            </ul>
          </div>
        </article>
      </section>

      <section class="layout-section">
        <div class="layout-section__heading">
          <h2 class="layout-section__title">ContentArea</h2>
          <p class="layout-page__description">{{ contentAreaRules.definition }}</p>
        </div>
        <article class="layout-rule layout-rule--wide">
          <h3 class="layout-rule__title">{{ contentAreaRules.title }}</h3>
          <div class="layout-rule__meta">{{ contentAreaRules.meta }}</div>
          <div class="layout-two-column">
            <ul class="layout-checklist">
              <li v-for="item in contentAreaRules.usage" :key="item">{{ item }}</li>
            </ul>
            <ul class="layout-checklist">
              <li v-for="item in contentAreaRules.rules" :key="item">{{ item }}</li>
            </ul>
          </div>
        </article>
      </section>

      <section class="layout-section">
        <div class="layout-section__heading">
          <h2 class="layout-section__title">ContentArea Layouts</h2>
          <p class="layout-page__description">
            ContentArea Layouts 是内容区的布局承载方式。生成页面时先判断业务密度、筛选需求和是否需要左侧范围选择，再选择对应框架。
          </p>
        </div>
        <div class="layout-layouts">
          <article v-for="layout in contentAreaLayouts" :key="layout.name" class="layout-layout-card">
            <div class="layout-layout-card__preview" :class="'layout-layout-card__preview--' + layout.name.toLowerCase().replaceAll('-', '_')">
              <span class="layout-layout-card__side" />
              <span class="layout-layout-card__top" />
              <span class="layout-layout-card__content">
                <span />
                <span />
                <span />
              </span>
            </div>
            <h3 class="layout-rule__title">{{ layout.name }}</h3>
            <div class="layout-rule__meta">{{ layout.meta }}</div>
            <p class="layout-rule__body">用途：{{ layout.usage }}</p>
            <p class="layout-rule__body">结构：{{ layout.structure }}</p>
            <ul class="layout-checklist">
              <li v-for="rule in layout.rules" :key="rule">{{ rule }}</li>
            </ul>
          </article>
        </div>
      </section>

      <section class="layout-section">
        <div class="layout-section__heading">
          <h2 class="layout-section__title">Scroll Area</h2>
          <p class="layout-page__description">{{ scrollAreaDefinition }}</p>
        </div>
        <article class="layout-anatomy__note">
          <ul class="layout-checklist">
            <li v-for="rule in scrollAreaRules" :key="rule">{{ rule }}</li>
          </ul>
        </article>
      </section>
    </main>
  `,
});

const meta = {
  title: '页面规则/01 页面框架',
  component: PageFrameworkGuidelines,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '页面框架规则用于约束 AI 生成 B 端后台页面时的 AppShell、Sidebar、Topbar、ContentArea、ContentArea Layouts 和 Scroll Area。',
      },
    },
  },
} satisfies Meta<typeof PageFrameworkGuidelines>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {};
