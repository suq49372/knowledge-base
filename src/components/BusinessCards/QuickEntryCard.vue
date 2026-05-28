<script setup lang="ts">
import XueIcon, { type XueIconName } from '../Icon/Icon.vue';

const props = withDefaults(
  defineProps<{
    title?: string;
    subtitle?: string;
    icon?: XueIconName;
    tone?: 'blue' | 'green';
  }>(),
  {
    title: '备课中心',
    subtitle: '去备课',
    icon: 'book-fill',
    tone: 'green',
  },
);
</script>

<template>
  <article class="xue-quick-entry-card" data-figma-node="11658:10990">
    <span class="xue-quick-entry-card__icon" :class="`xue-quick-entry-card__icon--${props.tone}`">
      <XueIcon :name="props.icon" :size="24" />
    </span>
    <span class="xue-quick-entry-card__content">
      <strong>{{ props.title }}</strong>
      <span>{{ props.subtitle }}</span>
    </span>
  </article>
</template>

<style scoped lang="scss">
.xue-quick-entry-card {
  display: inline-flex;
  width: var(--xue-business-card-quick-width);
  height: var(--xue-business-card-quick-height);
  align-items: center;
  gap: var(--xue-padding-16);
  border-radius: var(--xue-radius-6);
  background: var(--xue-surface-light);
  padding: 0 var(--xue-padding-24);
  font-family: var(--xue-font-family);
}

.xue-quick-entry-card__icon {
  display: inline-flex;
  width: var(--xue-business-card-icon-md);
  height: var(--xue-business-card-icon-md);
  align-items: center;
  justify-content: center;
  border-radius: var(--xue-radius-6);
  background: var(--xue-white);
  color: var(--xue-primary);

  &--green {
    color: var(--xue-success);
  }
}

.xue-quick-entry-card__content {
  display: grid;
  gap: var(--xue-padding-4);
  min-width: 0;

  strong {
    overflow: hidden;
    color: var(--xue-text-primary);
    font-size: var(--xue-font-size-16);
    font-weight: var(--xue-font-weight-medium);
    line-height: var(--xue-line-height-16);
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  span {
    color: var(--xue-text-secondary);
    font-size: var(--xue-font-size-14);
    line-height: var(--xue-line-height-14);
  }
}
</style>
