<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    current?: number;
    totalPages?: number;
    pageSize?: number;
    pageSizeOptions?: number[];
    showSizeChanger?: boolean;
    showQuickJumper?: boolean;
  }>(),
  {
    current: 1,
    totalPages: 7,
    pageSize: 10,
    pageSizeOptions: () => [10, 20, 30],
    showSizeChanger: false,
    showQuickJumper: false,
  },
);

const emit = defineEmits<{
  change: [page: number];
  pageSizeChange: [size: number];
}>();

const pages = computed(() => Array.from({ length: props.totalPages }, (_, index) => index + 1));
</script>

<template>
  <nav class="xue-pagination" data-figma-node="1502:4103" aria-label="分页">
    <button class="xue-pagination__arrow" type="button" aria-label="上一页" :disabled="props.current <= 1">
      ‹
    </button>
    <button
      v-for="page in pages"
      :key="page"
      class="xue-pagination__page"
      :class="{ 'xue-pagination__page--active': page === props.current }"
      type="button"
      @click="emit('change', page)"
    >
      {{ page }}
    </button>
    <button class="xue-pagination__arrow" type="button" aria-label="下一页" :disabled="props.current >= props.totalPages">
      ›
    </button>

    <select
      v-if="props.showSizeChanger"
      class="xue-pagination__size"
      :value="props.pageSize"
      @change="emit('pageSizeChange', Number(($event.target as HTMLSelectElement).value))"
    >
      <option v-for="size in props.pageSizeOptions" :key="size" :value="size">{{ size }}条/页</option>
    </select>

    <span v-if="props.showQuickJumper" class="xue-pagination__jump">
      前往
      <input :value="props.current" aria-label="跳转页码" />
      页
    </span>
  </nav>
</template>

<style scoped lang="scss">
.xue-pagination {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--xue-text-primary);
  font-size: var(--xue-font-size-14);
  line-height: var(--xue-line-height-14);

  &__arrow,
  &__page {
    min-width: 24px;
    height: 24px;
    border: 0;
    border-radius: var(--xue-radius-4);
    background: transparent;
    color: inherit;
    cursor: pointer;
    padding: 0 6px;

    &:disabled {
      color: var(--xue-text-disabled);
      cursor: not-allowed;
    }
  }

  &__page--active {
    background: var(--xue-primary-subtle, #d6e1ff);
    color: var(--xue-primary);
  }

  &__size {
    height: 32px;
    min-width: 98px;
    border: 1px solid var(--xue-border);
    border-radius: var(--xue-radius-6);
    background: var(--xue-white);
    color: var(--xue-text-secondary);
    padding: 0 10px;
    font: inherit;
  }

  &__jump {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--xue-text-secondary);
  }

  &__jump input {
    width: 40px;
    height: 32px;
    border: 1px solid var(--xue-border);
    border-radius: var(--xue-radius-6);
    text-align: center;
    font: inherit;
  }
}
</style>
