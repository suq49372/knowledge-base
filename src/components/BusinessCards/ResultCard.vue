<script setup lang="ts">
import XueButton from '../Button/Button.vue';
import XueIcon from '../Icon/Icon.vue';

const props = withDefaults(
  defineProps<{
    title?: string;
    description?: string;
    actionText?: string;
  }>(),
  {
    title: '生成成功',
    description: '内容已生成，可继续编辑或查看详情。',
    actionText: '查看详情',
  },
);
</script>

<template>
  <article class="xue-result-card" data-figma-node="11809:13705">
    <span class="xue-result-card__icon">
      <XueIcon name="circle-check-fill" :size="32" />
    </span>
    <div class="xue-result-card__body">
      <strong>{{ props.title }}</strong>
      <p>{{ props.description }}</p>
    </div>
    <XueButton content="outline" color="gray" size="md">{{ props.actionText }}</XueButton>
  </article>
</template>

<style scoped lang="scss">
.xue-result-card {
  display: flex;
  width: var(--xue-business-card-result-width);
  min-height: var(--xue-business-card-result-min-height);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--xue-padding-12);
  border: var(--xue-stroke-divider) solid var(--xue-divider);
  border-radius: var(--xue-radius-8);
  background: var(--xue-white);
  padding: var(--xue-padding-24);
  text-align: center;
  font-family: var(--xue-font-family);
}

.xue-result-card__icon {
  display: inline-flex;
  color: var(--xue-success);
}

.xue-result-card__body {
  display: grid;
  gap: var(--xue-padding-6);

  strong {
    color: var(--xue-text-primary);
    font-size: var(--xue-font-size-16);
    font-weight: var(--xue-font-weight-medium);
    line-height: var(--xue-line-height-16);
  }

  p {
    margin: 0;
    color: var(--xue-text-secondary);
    font-size: var(--xue-font-size-14);
    line-height: var(--xue-line-height-14);
  }
}
</style>
