<script setup lang="ts">
import XueIcon, { type XueIconName } from '../Icon/Icon.vue';

const props = withDefaults(
  defineProps<{
    title?: string;
    value?: string;
    description?: string;
    icon?: XueIconName;
    layout?: 'compact' | 'wide' | 'panel';
  }>(),
  {
    title: '数据',
    value: '20',
    description: '已完成',
    icon: 'rank-fill',
    layout: 'compact',
  },
);
</script>

<template>
  <article class="xue-data-card" :class="`xue-data-card--${props.layout}`" data-figma-node="11809:14117">
    <header class="xue-data-card__header">
      <span class="xue-data-card__icon">
        <XueIcon :name="props.icon" :size="22" />
      </span>
      <span>{{ props.title }}</span>
    </header>
    <div class="xue-data-card__metric">
      <strong>{{ props.value }}</strong>
      <span>{{ props.description }}</span>
    </div>
    <div v-if="props.layout === 'panel'" class="xue-data-card__chart" aria-hidden="true">
      <span v-for="index in 8" :key="index" />
    </div>
  </article>
</template>

<style scoped lang="scss">
.xue-data-card {
  display: flex;
  width: var(--xue-business-card-data-width);
  min-height: var(--xue-business-card-data-min-height);
  flex-direction: column;
  gap: var(--xue-padding-20);
  border: var(--xue-stroke-divider) solid var(--xue-divider);
  border-radius: var(--xue-radius-8);
  background: var(--xue-white);
  padding: var(--xue-padding-20);
  font-family: var(--xue-font-family);

  &--wide {
    width: var(--xue-business-card-data-wide-width);
  }

  &--panel {
    width: var(--xue-business-card-data-panel-width);
    min-height: var(--xue-business-card-data-panel-min-height);
  }
}

.xue-data-card__header {
  display: flex;
  align-items: center;
  gap: var(--xue-padding-8);
  color: var(--xue-text-secondary);
  font-size: var(--xue-font-size-14);
  line-height: var(--xue-line-height-14);
}

.xue-data-card__icon {
  display: inline-flex;
  width: var(--xue-business-card-icon-sm);
  height: var(--xue-business-card-icon-sm);
  align-items: center;
  justify-content: center;
  border-radius: var(--xue-radius-6);
  background: var(--xue-primary-subtle);
  color: var(--xue-primary);
}

.xue-data-card__metric {
  display: grid;
  gap: var(--xue-padding-4);

  strong {
    color: var(--xue-text-primary);
    font-family: var(--xue-number-font-family);
    font-size: var(--xue-font-size-display);
    font-weight: var(--xue-font-weight-bold);
    line-height: var(--xue-line-height-display);
  }

  span {
    color: var(--xue-text-secondary);
    font-size: var(--xue-font-size-14);
    line-height: var(--xue-line-height-14);
  }
}

.xue-data-card__chart {
  display: flex;
  flex: 1;
  align-items: end;
  gap: var(--xue-padding-12);
  border-top: var(--xue-stroke-divider) solid var(--xue-divider);
  padding-top: var(--xue-padding-24);
}

.xue-data-card__chart span {
  width: var(--xue-business-card-chart-bar-width);
  border-radius: var(--xue-radius-4) var(--xue-radius-4) 0 0;
  background: var(--xue-primary-subtle);
}

.xue-data-card__chart span:nth-child(1) {
  height: var(--xue-business-card-chart-bar-height-1);
}

.xue-data-card__chart span:nth-child(2) {
  height: var(--xue-business-card-chart-bar-height-2);
}

.xue-data-card__chart span:nth-child(3) {
  height: var(--xue-business-card-chart-bar-height-3);
}

.xue-data-card__chart span:nth-child(4) {
  height: var(--xue-business-card-chart-bar-height-4);
}

.xue-data-card__chart span:nth-child(5) {
  height: var(--xue-business-card-chart-bar-height-5);
}

.xue-data-card__chart span:nth-child(6) {
  height: var(--xue-business-card-chart-bar-height-6);
}

.xue-data-card__chart span:nth-child(7) {
  height: var(--xue-business-card-chart-bar-height-7);
}

.xue-data-card__chart span:nth-child(8) {
  height: var(--xue-business-card-chart-bar-height-8);
}
</style>
