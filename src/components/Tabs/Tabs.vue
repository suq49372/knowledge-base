<script setup lang="ts">
import XueIcon, { type XueIconName } from '../Icon/Icon.vue';

type TabsVariant = 'line' | 'capsule';
type TabsItemType = 'text' | 'text-badge' | 'text-icon';
type TabsSize = 'md' | 'large';

export type XueTabItem = {
  label: string;
  value: string;
  badge?: 'red' | 'green';
  icon?: XueIconName;
  disabled?: boolean;
};

const props = withDefaults(
  defineProps<{
    items?: XueTabItem[];
    modelValue?: string;
    variant?: TabsVariant;
    itemType?: TabsItemType;
    size?: TabsSize;
    divider?: boolean;
  }>(),
  {
    items: () => [
      { label: '标签', value: 'tab-1' },
      { label: '标签', value: 'tab-2' },
      { label: '标签', value: 'tab-3' },
    ],
    modelValue: 'tab-1',
    variant: 'line',
    itemType: 'text',
    size: 'md',
    divider: false,
  },
);

const emit = defineEmits<{
  'update:modelValue': [value: string];
  change: [value: string];
}>();

const selectTab = (item: XueTabItem) => {
  if (item.disabled) return;
  emit('update:modelValue', item.value);
  emit('change', item.value);
};
</script>

<template>
  <div
    class="xue-tabs"
    :class="[
      `xue-tabs--${props.variant}`,
      `xue-tabs--${props.size}`,
      { 'xue-tabs--divider': props.divider },
    ]"
    data-figma-node="1502:4912"
  >
    <button
      v-for="item in props.items"
      :key="item.value"
      class="xue-tabs__item"
      :class="{
        'is-active': item.value === props.modelValue,
        'is-disabled': item.disabled,
      }"
      type="button"
      :disabled="item.disabled"
      @click="selectTab(item)"
    >
      <XueIcon v-if="props.itemType === 'text-icon'" :name="item.icon || 'circle-info-fill'" :size="14" />
      <span v-if="props.itemType === 'text-badge'" class="xue-tabs__badge" :class="`xue-tabs__badge--${item.badge || 'red'}`" />
      <span class="xue-tabs__label">{{ item.label }}</span>
    </button>
  </div>
</template>

<style scoped lang="scss">
.xue-tabs {
  display: inline-flex;
  align-items: flex-start;
  color: var(--xue-text-secondary);
  font-family: var(--xue-font-family);
  font-size: var(--xue-font-size-14);
  line-height: var(--xue-line-height-14);

  &--divider {
    border-bottom: var(--xue-stroke-divider) solid var(--xue-border);
  }

  &--line {
    gap: 16px;

    &.xue-tabs--large {
      gap: 20px;
      font-size: var(--xue-font-size-16);
      line-height: var(--xue-line-height-16);
    }
  }

  &--capsule {
    gap: 4px;
    align-items: center;
    padding: var(--xue-padding-6);
    border-radius: var(--xue-radius-6);
    background: var(--xue-surface-light);
  }
}

.xue-tabs__item {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  white-space: nowrap;
  cursor: pointer;
  transition: color 0.16s ease, background-color 0.16s ease;

  &:disabled {
    color: var(--xue-text-disabled);
    cursor: not-allowed;
  }
}

.xue-tabs--line .xue-tabs__item {
  height: 28px;
  padding: 0;

  &::after {
    position: absolute;
    right: 50%;
    bottom: 0;
    width: 16px;
    height: 2px;
    border-radius: 99px;
    background: transparent;
    transform: translateX(50%);
    content: '';
  }

  &.is-active {
    color: var(--xue-text-primary);

    &::after {
      width: 20px;
      background: var(--xue-primary);
    }
  }
}

.xue-tabs--line.xue-tabs--large .xue-tabs__item {
  height: 30px;
}

.xue-tabs--capsule .xue-tabs__item {
  height: var(--xue-control-md);
  padding: 0 var(--xue-padding-10);
  border-radius: var(--xue-radius-6);
  color: var(--xue-text-primary);

  &.is-active {
    background: var(--xue-primary-subtle);
    color: var(--xue-primary);
  }
}

.xue-tabs__badge {
  width: 12px;
  height: 12px;
  border-radius: 50%;

  &--red {
    background: var(--xue-danger);
  }

  &--green {
    background: var(--xue-success);
  }
}
</style>
