<script setup lang="ts">
type TableRow = Record<string, unknown>;
type TableColumn = {
  key: string;
  title: string;
  sortable?: boolean;
  width?: string;
};

const props = withDefaults(
  defineProps<{
    columns?: TableColumn[];
    data?: TableRow[];
    selectable?: boolean;
    actions?: boolean;
    empty?: boolean;
    bordered?: boolean;
    scrollX?: boolean;
    groupedHeader?: boolean;
  }>(),
  {
    columns: () => [
      { key: 'student', title: '学员' },
      { key: 'address', title: '地址' },
      { key: 'year', title: '年份' },
      { key: 'phone', title: '电话' },
      { key: 'email', title: '邮箱' },
    ],
    data: () => [
      { student: '姓名', address: '北京市海淀区中关村大街', year: '2024', phone: '10013405700', email: '12345@gmail.com' },
      { student: '姓名', address: '北京市海淀区中关村大街', year: '2024', phone: '10013405700', email: '12345@gmail.com' },
      { student: '正文', address: '北京市海淀区中关村大街', year: '2024', phone: '10013405700', email: '12345@gmail.com' },
      { student: '正文', address: '北京市海淀区中关村大街', year: '2024', phone: '10013405700', email: '12345@gmail.com' },
    ],
    selectable: false,
    actions: false,
    empty: false,
    bordered: false,
    scrollX: false,
    groupedHeader: false,
  },
);

function cellValue(row: TableRow, key: string) {
  return String(row[key] ?? '');
}
</script>

<template>
  <div
    class="xue-table"
    :class="{ 'xue-table--bordered': props.bordered, 'xue-table--scroll': props.scrollX }"
    data-figma-node="1539:11067"
  >
    <div class="xue-table__scroller">
      <table>
        <thead>
          <tr v-if="props.groupedHeader">
            <th v-if="props.selectable" rowspan="2" class="xue-table__selection"><input type="checkbox" /></th>
            <th rowspan="2">学员</th>
            <th colspan="4" class="xue-table__group">信息</th>
            <th v-if="props.actions" rowspan="2" class="xue-table__actions-head"></th>
          </tr>
          <tr>
            <th v-if="props.selectable && !props.groupedHeader" class="xue-table__selection"><input type="checkbox" /></th>
            <th v-for="column in props.groupedHeader ? props.columns.slice(1) : props.columns" :key="String(column.key)">
              <span>{{ column.title }}</span>
              <span v-if="column.sortable" class="xue-table__sort" aria-hidden="true">↕</span>
            </th>
            <th v-if="props.actions" class="xue-table__actions-head"></th>
          </tr>
        </thead>
        <tbody v-if="!props.empty">
          <tr v-for="(row, rowIndex) in props.data" :key="rowIndex">
            <td v-if="props.selectable" class="xue-table__selection"><input type="checkbox" /></td>
            <td v-for="column in props.columns" :key="String(column.key)">
              {{ cellValue(row, column.key) }}
            </td>
            <td v-if="props.actions" class="xue-table__actions">
              <button type="button">查看</button>
              <button type="button">编辑</button>
              <button type="button">...</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="props.empty" class="xue-table__empty">
        <span class="xue-table__empty-icon"></span>
        <span>暂无数据</span>
      </div>
    </div>
    <div v-if="props.scrollX" class="xue-table__bar"><span></span></div>
  </div>
</template>

<style scoped lang="scss">
.xue-table {
  width: 100%;
  overflow: hidden;
  border: 1px solid var(--xue-divider);
  border-radius: var(--xue-radius-8);
  background: var(--xue-white);
  color: var(--xue-text-primary);
  font-size: var(--xue-font-size-14);
  line-height: var(--xue-line-height-14);

  &__scroller {
    overflow-x: auto;
  }

  table {
    width: 100%;
    min-width: 720px;
    border-collapse: collapse;
  }

  th,
  td {
    height: 48px;
    border-bottom: 1px solid var(--xue-divider);
    padding: 0 16px;
    text-align: left;
    white-space: nowrap;
  }

  th {
    height: 40px;
    background: var(--xue-surface);
    color: var(--xue-text-secondary);
    font-weight: 400;
  }

  tbody tr:last-child td {
    border-bottom: 0;
  }

  &--bordered {
    th,
    td {
      border-right: 1px solid var(--xue-divider);

      &:last-child {
        border-right: 0;
      }
    }
  }

  &__selection {
    width: 48px;
  }

  input[type="checkbox"] {
    width: 14px;
    height: 14px;
    margin: 0;
  }

  &__sort {
    margin-left: 4px;
    color: var(--xue-text-tertiary);
    font-size: 12px;
  }

  &__group {
    text-align: center;
  }

  &__actions {
    width: 120px;
    text-align: right;

    button {
      border: 0;
      background: transparent;
      color: var(--xue-primary);
      cursor: pointer;
      margin-left: 12px;
      padding: 0;
    }
  }

  &__actions-head {
    width: 120px;
  }

  &__empty {
    height: 260px;
    display: grid;
    place-items: center;
    align-content: center;
    gap: 8px;
    color: var(--xue-text-tertiary);
  }

  &__empty-icon {
    width: 18px;
    height: 14px;
    border-radius: 3px;
    background: var(--xue-text-disabled);
    opacity: 0.7;
  }

  &__bar {
    height: 10px;
    padding: 2px 68px;
    background: var(--xue-white);

    span {
      display: block;
      height: 6px;
      border-radius: 999px;
      background: rgb(0 0 0 / 22%);
    }
  }
}
</style>
