<script setup lang="ts">
import XueIcon from '../Icon/Icon.vue';
import XueTag from '../Tag/Tag.vue';

const props = withDefaults(
  defineProps<{
    type?: 'class' | 'exam' | 'tab';
    title?: string;
    meta?: string;
    active?: boolean;
    status?: string;
  }>(),
  {
    type: 'class',
    title: '2023春季数学高阶班',
    meta: '每周四17:00-19:00',
    active: false,
    status: '开课中',
  },
);
</script>

<template>
  <article class="xue-class-exam-card" :class="[`xue-class-exam-card--${props.type}`, { 'is-active': props.active }]">
    <template v-if="props.type === 'tab'">
      <XueTag color="purple">托管</XueTag>
      <strong>{{ props.title }}</strong>
    </template>
    <template v-else>
      <header class="xue-class-exam-card__header">
        <span class="xue-class-exam-card__title">
          <XueTag color="purple">{{ props.type === 'exam' ? '考试' : '托管' }}</XueTag>
          <strong>{{ props.title }}</strong>
        </span>
        <XueTag v-if="props.status" color="green">{{ props.status }}</XueTag>
      </header>
      <p>{{ props.meta }}</p>
      <XueIcon class="xue-class-exam-card__more" name="more" :size="20" />
    </template>
  </article>
</template>

<style scoped lang="scss">
.xue-class-exam-card {
  position: relative;
  display: grid;
  width: 280px;
  min-height: 88px;
  gap: var(--xue-padding-14, 14px);
  border: 1px solid var(--xue-border);
  border-radius: var(--xue-radius-6);
  background: var(--xue-white);
  padding: var(--xue-padding-16);
  color: var(--xue-text-primary);
  font-family: var(--xue-font-family);

  &.is-active {
    border-color: var(--xue-primary);
  }

  &--exam {
    min-height: 156px;
  }

  &--tab {
    display: inline-flex;
    width: auto;
    min-height: 32px;
    align-items: center;
    gap: var(--xue-padding-8);
    padding: var(--xue-padding-4) var(--xue-padding-8);
  }
}

.xue-class-exam-card__header,
.xue-class-exam-card__title {
  display: flex;
  align-items: center;
  gap: var(--xue-padding-8);
  min-width: 0;
}

.xue-class-exam-card__header {
  justify-content: space-between;
}

.xue-class-exam-card strong {
  overflow: hidden;
  font-size: var(--xue-font-size-16);
  font-weight: var(--xue-font-weight-medium);
  line-height: var(--xue-line-height-16);
  text-overflow: ellipsis;
  white-space: nowrap;
}

.xue-class-exam-card p {
  margin: 0;
  color: var(--xue-text-secondary);
  font-size: var(--xue-font-size-14);
  line-height: var(--xue-line-height-14);
}

.xue-class-exam-card__more {
  position: absolute;
  right: 16px;
  bottom: 16px;
  color: var(--xue-text-secondary);
}
</style>
