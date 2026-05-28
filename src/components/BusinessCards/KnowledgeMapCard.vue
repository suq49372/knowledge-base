<script setup lang="ts">
import XueButton from '../Button/Button.vue';
import XueIcon from '../Icon/Icon.vue';

const props = withDefaults(
  defineProps<{
    title?: string;
    subtitle?: string;
    disabled?: boolean;
  }>(),
  {
    title: '考点地图',
    subtitle: '查看题目关联考点与掌握情况',
    disabled: false,
  },
);
</script>

<template>
  <article class="xue-knowledge-map-card" :class="{ 'is-disabled': props.disabled }" data-figma-node="11800:11623">
    <span class="xue-knowledge-map-card__icon">
      <XueIcon name="rank-fill" :size="24" />
    </span>
    <span class="xue-knowledge-map-card__content">
      <strong>{{ props.title }}</strong>
      <span>{{ props.subtitle }}</span>
    </span>
    <XueButton content="outline" color="gray" size="md" :disabled="props.disabled">查看</XueButton>
  </article>
</template>

<style scoped lang="scss">
.xue-knowledge-map-card {
  display: flex;
  width: var(--xue-business-card-map-width);
  height: var(--xue-business-card-map-height);
  align-items: center;
  gap: var(--xue-padding-16);
  border: var(--xue-stroke-divider) solid var(--xue-divider);
  border-radius: var(--xue-radius-8);
  background: var(--xue-white);
  padding: var(--xue-padding-20);
  font-family: var(--xue-font-family);

  &.is-disabled {
    background: var(--xue-surface-light);
    opacity: 0.72;
  }
}

.xue-knowledge-map-card__icon {
  display: inline-flex;
  width: var(--xue-business-card-icon-lg);
  height: var(--xue-business-card-icon-lg);
  align-items: center;
  justify-content: center;
  border-radius: var(--xue-radius-8);
  background: var(--xue-primary-subtle);
  color: var(--xue-primary);
}

.xue-knowledge-map-card__content {
  display: grid;
  flex: 1;
  gap: var(--xue-padding-4);
  min-width: 0;

  strong {
    color: var(--xue-text-primary);
    font-size: var(--xue-font-size-16);
    font-weight: var(--xue-font-weight-medium);
    line-height: var(--xue-line-height-16);
  }

  span {
    overflow: hidden;
    color: var(--xue-text-secondary);
    font-size: var(--xue-font-size-14);
    line-height: var(--xue-line-height-14);
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
