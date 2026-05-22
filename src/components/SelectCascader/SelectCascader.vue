<script setup lang="ts">
import { computed } from 'vue';
import XueIcon from '../Icon/Icon.vue';

type CascaderState = 'hover' | 'selected' | 'scroll' | 'empty';

export type XueCascaderOption = {
  label: string;
  value: string;
  active?: boolean;
  selected?: boolean;
  children?: XueCascaderOption[];
};

const props = withDefaults(
  defineProps<{
    state?: CascaderState;
    columns?: XueCascaderOption[][];
    emptyText?: string;
    showScrollbar?: boolean;
  }>(),
  {
    state: 'hover',
    emptyText: '暂无数据',
    showScrollbar: true,
    columns: () => [
      [
        { label: '选项', value: 'level-1-a', children: [] },
        { label: '选项', value: 'level-1-b', children: [], active: true, selected: true },
        { label: '选项', value: 'level-1-c', children: [] },
      ],
      [
        { label: '选项', value: 'level-2-a', children: [] },
        { label: '选项', value: 'level-2-b', children: [], active: true, selected: true },
        { label: '选项', value: 'level-2-c', children: [] },
      ],
      [
        { label: '选项', value: 'level-3-a' },
        { label: '选项', value: 'level-3-b', active: true, selected: true },
        { label: '选项', value: 'level-3-c' },
      ],
    ],
  },
);

const emit = defineEmits<{
  select: [option: XueCascaderOption, columnIndex: number];
}>();

const displayColumns = computed(() => {
  if (props.state === 'scroll') {
    const longColumn = Array.from({ length: 10 }, (_, index) => ({
      label: '选项',
      value: `scroll-${index}`,
      active: index === 1,
      selected: index === 1,
    }));

    return [
      props.columns[0] ?? [],
      props.columns[1] ?? [],
      longColumn,
    ];
  }

  if (props.state === 'selected') {
    return props.columns.map((column) =>
      column.map((option, index) => ({
        ...option,
        selected: index === 1,
        active: index === 1,
      })),
    );
  }

  return props.columns;
});

const hasChildren = (option: XueCascaderOption, columnIndex: number) => {
  return Boolean(option.children?.length) || columnIndex < displayColumns.value.length - 1;
};
</script>

<template>
  <div
    class="xue-select-cascader"
    :class="[`xue-select-cascader--${props.state}`]"
    data-figma-node="11911:23886"
  >
    <p v-if="props.state === 'empty'" class="xue-select-cascader__empty">{{ props.emptyText }}</p>

    <template v-else>
      <template v-for="(column, columnIndex) in displayColumns" :key="columnIndex">
        <div class="xue-select-cascader__column">
          <button
            v-for="(option, optionIndex) in column"
            :key="option.value"
            class="xue-select-cascader__item"
            :class="{
              'is-active': option.active || (props.state === 'hover' && columnIndex === 2 && optionIndex === 1),
              'is-selected': option.selected,
            }"
            type="button"
            @click="emit('select', option, columnIndex)"
          >
            <span>{{ option.label }}</span>
            <XueIcon v-if="hasChildren(option, columnIndex)" name="right" :size="14" :stroke-width="1.8" />
          </button>
        </div>
        <div v-if="columnIndex < displayColumns.length - 1" class="xue-select-cascader__divider" />
      </template>

      <div v-if="props.state === 'scroll' && props.showScrollbar" class="xue-select-cascader__scrollbar" aria-hidden="true">
        <span />
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
.xue-select-cascader {
  display: inline-flex;
  min-width: 222px;
  min-height: 108px;
  align-items: flex-start;
  overflow: hidden;
  border: 1px solid var(--xue-divider);
  border-radius: var(--xue-radius-6);
  background: var(--xue-white);
  box-shadow: var(--xue-shadow-card);
  color: var(--xue-text-neutral);
  font-family: var(--xue-font-family);
  font-size: var(--xue-font-size-14);
  line-height: var(--xue-line-height-14);

  &--selected {
    min-width: 222px;
  }

  &--scroll {
    height: 346px;
    min-width: 232px;
  }

  &--empty {
    width: 334px;
    height: 142px;
    align-items: center;
    justify-content: center;
  }
}

.xue-select-cascader__column {
  display: flex;
  width: 74px;
  align-self: stretch;
  flex-direction: column;
  gap: var(--xue-padding-2);
  padding: var(--xue-padding-4);
  background: var(--xue-white);
}

.xue-select-cascader__item {
  display: flex;
  width: 100%;
  height: var(--xue-control-base);
  align-items: center;
  gap: var(--xue-padding-8);
  padding: 0 var(--xue-padding-8);
  border: 0;
  border-radius: var(--xue-radius-4);
  background: transparent;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;

  span {
    min-width: 0;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &:hover,
  &.is-active {
    background: var(--xue-hover-mask);
    color: var(--xue-text-primary);
  }

  &.is-selected {
    color: var(--xue-primary);
  }
}

.xue-select-cascader__divider {
  width: 1px;
  align-self: stretch;
  background: var(--xue-divider);
}

.xue-select-cascader__scrollbar {
  display: flex;
  width: 10px;
  align-self: stretch;
  justify-content: center;
  padding: 40px 2px;

  span {
    width: 6px;
    height: 100%;
    border-radius: 999px;
    background: var(--xue-scrollbar-mask);
  }
}

.xue-select-cascader__empty {
  margin: 0;
  color: var(--xue-text-tertiary);
  font-size: var(--xue-font-size-14);
  line-height: var(--xue-line-height-14);
}
</style>
