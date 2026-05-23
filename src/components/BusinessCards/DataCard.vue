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
      <span v-for="index in 8" :key="index" :style="{ height: `${18 + index * 8}px` }" />
    </div>
  </article>
</template>

<style scoped lang="scss">
.xue-data-card {
  display: flex;
  width: 246px;
  min-height: 172px;
  flex-direction: column;
  gap: var(--xue-padding-20);
  border: 1px solid var(--xue-divider);
  border-radius: var(--xue-radius-8);
  background: var(--xue-white);
  padding: var(--xue-padding-20);
  font-family: var(--xue-font-family);

  &--wide {
    width: 419px;
  }

  &--panel {
    width: 626px;
    min-height: 404px;
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
  width: 32px;
  height: 32px;
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
    font-size: 32px;
    font-weight: var(--xue-font-weight-bold);
    line-height: 40px;
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
  border-top: 1px solid var(--xue-divider);
  padding-top: var(--xue-padding-24);
}

.xue-data-card__chart span {
  width: 28px;
  border-radius: var(--xue-radius-4) var(--xue-radius-4) 0 0;
  background: var(--xue-primary-subtle);
}
</style>
