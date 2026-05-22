# B AI Design System

Vue 3 + TypeScript + SCSS + Storybook component-library starter generated from the Figma base components.

## Stack

- Vue 3
- TypeScript
- SCSS design tokens
- Storybook
- Vite

## Figma Source

- File: `myIgUD4SrX8JS70gb9hjEY`
- Variables canvas: `11911:46911`
- Button: `2313:6363`
- TextInput: `7515:8324`
- Modal: `12212:10430`

## Design Variables

- CSS variables: `src/styles/tokens.scss`
- Token metadata: `src/styles/tokens.ts`
- Storybook page: `设计变量/Variables`
- Recorded groups: color, typography, radius, sizing, spacing, shadow.

## Page Rules

- Storybook page: `页面规则/00 AI 出稿协作规则`
- AI workflow scope: interaction-first discussion, Figma Library lookup, Storybook lookup, component priority, icon rules, delivery audit, and component-library retrospective.
- Figma source: `12231:14487`
- Storybook page: `页面规则/01 页面框架`
- Baseline canvas: `1512 × 982`
- Framework scope: AppShell, Sidebar, Topbar, ContentArea, navigation modes, content layering, and scroll boundaries.
- Default shell: fixed sidebar, topbar, and scrollable content area.
- Storybook page: `页面规则/02 内容区组件布局`
- Content layout scope: Horizontal, Vertical, Card Group, Info / Metric Card, Task / Timeline Card, and Subject / Category Tile.

## Teacher Platform Sidebar Mapping

- Storybook story: `基础组件/Sidebar/TeacherPlatform`
- Canvas baseline: `1512 × 982`
- The business sidebar uses the published `TOB系统AI测试` icon naming where possible:
  `paper`, `courseware`, `folder`, `file-fill`, `merged-tutoring`, `concentrate`, `outline`, `rank-fill`,
  `thumb-up-hexagon-fill`, `book`, and `flag-fill`.
- Figma-library aliases such as `icon/courseware`, `icon/paper`, and `merged-icon/concentrate` are also accepted by `XueIcon`.

## Implemented Components

| Figma node | Code component | Notes |
| --- | --- | --- |
| `2313:6363` Button | `XueButton` | Supports `content`, `composition`, `color`, `size`, `disabled`. |
| `7515:8324` TextInput | `XueTextInput` | Supports `basic`, `filled`, `disabled`, `count`, `textarea`, `focus`, and clear action. |
| `12212:10430` Modal | `XueModal` | Supports small, medium, large, max widths from Figma usage notes. |
| `7515:8331` SearchInput | `XueSearchInput` | Supports `idle`, `focused`, `filled`, `disabled`, and clear action. |
| `7515:8328` Select Field | `XueSelectField` | Supports `radio`, `multi`, `default`, `focused`, `filled`, `disabled`, and error focus. |
| `1473:2053` Select Dropdown | `XueSelectDropdown` | Supports `single`, `multiple`, `hover`, `selected`, `scroll`, and `empty`. |
| `1539:11067` Table | `XueTable` | Supports base, selectable, sortable, actions, scroll, empty, and grouped header demos. |
| `5117:24061` Tag | `XueTag` | Supports multicolor light/solid styles, icon, and close action. |
| `1502:4103` Pagination | `XuePagination` | Supports page buttons, page-size selector, and quick jumper. |
| `11911:46923` Icon | `XueIcon` | Reusable SVG icon base aligned to the Figma icon library. |
| `1502:4912` Tabs | `XueTabs` | Supports line, capsule, text, badge, icon, size, and divider variants. |
| `11590:7161` Sidebar | `XueSidebar` | Supports expanded and collapsed B-side navigation states. |
| `11750:17744` Radio | `XueRadio` | Supports icon/text states, checked, hover, and disabled variants. |
| `5377:9946` Checkbox | `XueCheckbox` | Supports icon/text states, checked, indeterminate, hover, and disabled variants. |
| `1503:8038` Switch | `XueSwitch` | Supports small, medium, large, on, and off variants. |
| `1500:3734` Breadcrumb | `XueBreadcrumb` | Supports idle and more hierarchy breadcrumb states. |
| `1502:3975` Dropdown | `XueDropdown` | Supports text action, icon action, single filter, and multi filter panels. |
| `7515:8340` DateTimeInput | `XueDateTimeInput` | Supports date, time, datetime, range, clearable, placeholder, and disabled states. |
| `11911:23886` Select/Cascader | `XueSelectCascader` | Supports hover, selected, scroll, and empty cascading panels. |

## Dropdown Usage

- `SelectDropdown` is only for the popup option list inside `SelectField`.
- `SelectCascader` is for associated hierarchical data, such as province/city/district or category levels.
- `Dropdown` is for action menus, icon menus, checkbox filters, and multi-condition filter panels triggered by buttons or other controls.

## Commands

```bash
npm install
npm run storybook
npm run typecheck
```

## Figma Code Connect Note

Current mapping status:

- `Button` -> `src/components/Button/Button.vue` mapped.
- `TextInput` -> `src/components/TextInput/TextInput.vue` mapped.
- `Modal` -> `src/components/Modal/Modal.vue` mapped.
- `SearchInput` -> `src/components/SearchInput/SearchInput.vue` mapped.
- `SelectField` -> `src/components/SelectField/SelectField.vue` mapped.
- `SelectDropdown` -> `src/components/SelectDropdown/SelectDropdown.vue` mapped.
- `Table` -> `src/components/Table/Table.vue` mapped.
- `Tag` -> `src/components/Tag/Tag.vue` mapped.
- `Pagination` -> `src/components/Pagination/Pagination.vue` mapped.
- `Icon` -> `src/components/Icon/Icon.vue` mapped with published node `12225:10677`.
- `Tabs` -> `src/components/Tabs/Tabs.vue` mapped.
- `Sidebar` -> `src/components/Sidebar/Sidebar.vue` mapped.
- `Radio` -> `src/components/Radio/Radio.vue` mapped.
- `Checkbox` -> `src/components/Checkbox/Checkbox.vue` mapped.
- `Switch` -> `src/components/Switch/Switch.vue` mapped.
- `Breadcrumb` -> `src/components/Breadcrumb/Breadcrumb.vue` mapped.
- `Dropdown` -> `src/components/Dropdown/Dropdown.vue` mapped.
- `DateTimeInput` -> `src/components/DateTimeInput/DateTimeInput.vue` mapped.
- `SelectCascader` -> `src/components/SelectCascader/SelectCascader.vue` pending mapping.

## Modal Copy Rule

The Figma docs recommend using action-specific primary button labels. Prefer `保存`, `删除`, `清空` instead of generic labels like `确认` or `是`.
