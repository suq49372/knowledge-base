export type TokenType = 'color' | 'typography' | 'radius' | 'sizing' | 'spacing' | 'shadow';

export type DesignToken = {
  name: string;
  cssVar: string;
  value: string;
  figma: string;
  type: TokenType;
  usage: string;
};

export type TokenGroup = {
  title: string;
  description: string;
  tokens: DesignToken[];
};

export const colorTokens: DesignToken[] = [
  { name: 'White', cssVar: '--xue-white', value: '#ffffff', figma: 'Base/white', type: 'color', usage: '基础白色、卡片和弹层背景' },
  { name: 'Primary', cssVar: '--xue-primary', value: '#336aff', figma: 'Primary/default', type: 'color', usage: '主按钮、焦点态、选中态' },
  { name: 'Primary hover', cssVar: '--xue-primary-hover', value: '#5c88ff', figma: 'Primary/hover', type: 'color', usage: '主色 hover' },
  { name: 'Primary pressed', cssVar: '--xue-primary-pressed', value: '#2955cc', figma: 'Primary/pressed', type: 'color', usage: '主色按下态' },
  { name: 'Primary disabled', cssVar: '--xue-primary-disabled', value: '#adc3ff', figma: 'Primary/disabled', type: 'color', usage: '主色禁用态' },
  { name: 'Primary subtle', cssVar: '--xue-primary-subtle', value: '#d6e1ff', figma: 'Primary/subtle', type: 'color', usage: '主色浅底、轻提示背景' },
  { name: 'Success', cssVar: '--xue-success', value: '#00c27b', figma: 'System/green/default', type: 'color', usage: '成功、通过、启用状态' },
  { name: 'Success subtle', cssVar: '--xue-success-subtle', value: '#ccf3e5', figma: 'System/green/subtle', type: 'color', usage: '成功浅底标签' },
  { name: 'Warning', cssVar: '--xue-warning', value: '#ffb21a', figma: 'System/yellow/default', type: 'color', usage: '警告、待处理状态' },
  { name: 'Warning subtle', cssVar: '--xue-warning-subtle', value: '#ffecc6', figma: 'System/yellow/subtle', type: 'color', usage: '警告浅底标签' },
  { name: 'Danger', cssVar: '--xue-danger', value: '#ff4c4c', figma: 'System/red/default', type: 'color', usage: '错误、删除、危险操作' },
  { name: 'Danger subtle', cssVar: '--xue-danger-subtle', value: '#ffdbdb', figma: 'System/red/subtle', type: 'color', usage: '错误浅底标签' },
  { name: 'Text primary', cssVar: '--xue-text-primary', value: '#0f1114', figma: 'Text/primary', type: 'color', usage: '正文主文本' },
  { name: 'Text secondary', cssVar: '--xue-text-secondary', value: '#565d66', figma: 'Text/secondary', type: 'color', usage: '辅助文本' },
  { name: 'Text tertiary', cssVar: '--xue-text-tertiary', value: '#969ca3', figma: 'Text/tertiary', type: 'color', usage: '占位、说明、弱提示' },
  { name: 'Text disabled', cssVar: '--xue-text-disabled', value: '#c3c7cc', figma: 'Text/disabled', type: 'color', usage: '禁用文本' },
  { name: 'Border', cssVar: '--xue-border', value: '#dadce0', figma: 'Border/default', type: 'color', usage: '输入框和控件描边' },
  { name: 'Divider', cssVar: '--xue-divider', value: '#e6e7eb', figma: 'Divider/default', type: 'color', usage: '表格、列表分割线' },
  { name: 'Surface', cssVar: '--xue-surface', value: '#f2f3f5', figma: 'Background/surface/default', type: 'color', usage: '浅灰背景、表头背景' },
  { name: 'Surface light', cssVar: '--xue-surface-light', value: '#f7f8fa', figma: '背景色/灰色/填充2', type: 'color', usage: '胶囊标签、页面浅底背景' },
];

export const typographyTokens: DesignToken[] = [
  { name: 'Font family', cssVar: '--xue-font-family', value: 'PingFang SC', figma: 'Typography/Chinese/font-family/primary-font', type: 'typography', usage: '中文界面默认字体' },
  { name: 'Caption size', cssVar: '--xue-font-size-12', value: '12px', figma: 'Typography/Chinese/font-size/12', type: 'typography', usage: '标签、说明、小号控件' },
  { name: 'Body size', cssVar: '--xue-font-size-14', value: '14px', figma: 'Typography/Chinese/font-size/14', type: 'typography', usage: 'B 端后台默认正文' },
  { name: 'Title size', cssVar: '--xue-font-size-16', value: '16px', figma: 'Typography/Chinese/font-size/16', type: 'typography', usage: '弹窗标题、区块标题' },
  { name: 'Metric size', cssVar: '--xue-font-size-20', value: '20px', figma: 'Typography/Chinese/font-size/20', type: 'typography', usage: '统计数字、页面重点指标' },
  { name: 'Caption line height', cssVar: '--xue-line-height-12', value: '16px', figma: 'Typography/Chinese/line-height/12', type: 'typography', usage: '12px 文本行高' },
  { name: 'Body line height', cssVar: '--xue-line-height-14', value: '20px', figma: 'Typography/Chinese/line-height/14', type: 'typography', usage: '14px 文本行高' },
  { name: 'Title line height', cssVar: '--xue-line-height-16', value: '22px', figma: 'Typography/Chinese/line-height/16', type: 'typography', usage: '16px 文本行高' },
  { name: 'Metric line height', cssVar: '--xue-line-height-20', value: '28px', figma: 'Typography/Chinese/line-height/20', type: 'typography', usage: '20px 数字标题行高' },
];

export const radiusTokens: DesignToken[] = [
  { name: 'Radius 4', cssVar: '--xue-radius-4', value: '4px', figma: 'Corner/Rounded Corners 4', type: 'radius', usage: '小控件、标签、表单项' },
  { name: 'Radius 5', cssVar: '--xue-radius-5', value: '5px', figma: 'Corner/Rounded Corners 5', type: 'radius', usage: '按钮默认圆角' },
  { name: 'Radius 6', cssVar: '--xue-radius-6', value: '6px', figma: 'Corner/Rounded Corners 6', type: 'radius', usage: '中等控件圆角' },
  { name: 'Radius 8', cssVar: '--xue-radius-8', value: '8px', figma: 'Corner/Rounded Corners 8', type: 'radius', usage: '弹窗、卡片、下拉层' },
  { name: 'Radius 12', cssVar: '--xue-radius-12', value: '12px', figma: 'Corner/Rounded Corners 12', type: 'radius', usage: '较大容器圆角' },
];

export const sizingTokens: DesignToken[] = [
  { name: 'Control xs', cssVar: '--xue-control-xs', value: '20px', figma: 'Height/control-height-xs', type: 'sizing', usage: '小型分页、紧凑按钮' },
  { name: 'Control sm', cssVar: '--xue-control-sm', value: '24px', figma: 'Height/control-height-sm', type: 'sizing', usage: '小号控件' },
  { name: 'Control md', cssVar: '--xue-control-md', value: '28px', figma: 'Height/control-height-md', type: 'sizing', usage: '默认按钮高度' },
  { name: 'Control base', cssVar: '--xue-control-base', value: '32px', figma: 'Height/control-height', type: 'sizing', usage: '表单输入、选择器高度' },
  { name: 'Control lg', cssVar: '--xue-control-lg', value: '36px', figma: 'Height/control-height-xl', type: 'sizing', usage: '大号控件' },
];

export const spacingTokens: DesignToken[] = [
  { name: 'Padding 2', cssVar: '--xue-padding-2', value: '2px', figma: 'Padding/padding-2', type: 'spacing', usage: '极小间距' },
  { name: 'Padding 4', cssVar: '--xue-padding-4', value: '4px', figma: 'Padding/padding-4', type: 'spacing', usage: '图标和文字间距' },
  { name: 'Padding 6', cssVar: '--xue-padding-6', value: '6px', figma: 'Padding/padding-6', type: 'spacing', usage: '紧凑控件内边距' },
  { name: 'Padding 8', cssVar: '--xue-padding-8', value: '8px', figma: 'Padding/padding-8', type: 'spacing', usage: '默认小间距' },
  { name: 'Padding 10', cssVar: '--xue-padding-10', value: '10px', figma: 'Padding/padding-10', type: 'spacing', usage: '按钮横向内边距' },
  { name: 'Padding 12', cssVar: '--xue-padding-12', value: '12px', figma: 'Padding/padding-12', type: 'spacing', usage: '表单和单元格内边距' },
  { name: 'Padding 16', cssVar: '--xue-padding-16', value: '16px', figma: 'Padding/padding-16', type: 'spacing', usage: '页面内容区常用间距' },
  { name: 'Padding 20', cssVar: '--xue-padding-20', value: '20px', figma: 'Padding/padding-20', type: 'spacing', usage: '弹层内容边距' },
  { name: 'Padding 24', cssVar: '--xue-padding-24', value: '24px', figma: 'Padding/padding-24', type: 'spacing', usage: '页面外边距和框架间距' },
  { name: 'Padding 32', cssVar: '--xue-padding-32', value: '32px', figma: 'Padding/padding-32', type: 'spacing', usage: '页面级大间距' },
];

export const shadowTokens: DesignToken[] = [
  { name: 'Card shadow', cssVar: '--xue-shadow-card', value: '0 2px 22px rgb(0 0 0 / 8%)', figma: 'card-shadow', type: 'shadow', usage: '下拉层、浮层、卡片阴影' },
  { name: 'Shadow color', cssVar: '--xue-shadow-color', value: 'rgb(0 0 0 / 8%)', figma: 'shadow/shadow-color', type: 'shadow', usage: '阴影颜色' },
  { name: 'Shadow radius', cssVar: '--xue-shadow-radius', value: '22px', figma: 'shadow/shadow-radius', type: 'shadow', usage: '阴影模糊半径' },
];

export const tokenGroups: TokenGroup[] = [
  { title: 'Color', description: '品牌、状态、文本、边框和背景色。', tokens: colorTokens },
  { title: 'Typography', description: '中文后台界面的字体、字号和行高。', tokens: typographyTokens },
  { title: 'Radius', description: '控件和容器圆角。', tokens: radiusTokens },
  { title: 'Sizing', description: '表单、按钮、分页等控件高度。', tokens: sizingTokens },
  { title: 'Spacing', description: '组件内边距和组合间距。', tokens: spacingTokens },
  { title: 'Shadow', description: '浮层和卡片阴影。', tokens: shadowTokens },
];
