<script setup lang="ts">
import XueButton from '../Button/Button.vue';
import XueIcon from '../Icon/Icon.vue';
import XueTag from '../Tag/Tag.vue';

const props = withDefaults(
  defineProps<{
    state?: 'not-created' | 'editable' | 'draft' | 'finish';
    title?: string;
    meta?: string;
  }>(),
  {
    state: 'not-created',
    title: '家长会报告',
    meta: '2024 春季班',
  },
);

const stateLabel = {
  'not-created': '未创建',
  editable: '可编辑',
  draft: '未发布终版',
  finish: '已完成',
};
</script>

<template>
  <article class="xue-parent-meeting-card" :class="`xue-parent-meeting-card--${props.state}`" data-figma-node="11675:5117">
    <header>
      <span class="xue-parent-meeting-card__icon">
        <XueIcon name="paper" :size="24" />
      </span>
      <XueTag :color="props.state === 'finish' ? 'green' : props.state === 'draft' ? 'orange' : 'blue'">
        {{ stateLabel[props.state] }}
      </XueTag>
    </header>
    <section>
      <strong>{{ props.title }}</strong>
      <p>{{ props.meta }}</p>
    </section>
    <XueButton :content="props.state === 'not-created' ? 'filled' : 'outline'" color="blue" size="md">
      {{ props.state === 'not-created' ? '创建报告' : '查看报告' }}
    </XueButton>
  </article>
</template>

<style scoped lang="scss">
.xue-parent-meeting-card {
  display: flex;
  width: 291px;
  min-height: 172px;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--xue-padding-16);
  border: 1px solid var(--xue-divider);
  border-radius: var(--xue-radius-8);
  background: var(--xue-white);
  padding: var(--xue-padding-20);
  font-family: var(--xue-font-family);
}

.xue-parent-meeting-card header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.xue-parent-meeting-card__icon {
  display: inline-flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: var(--xue-radius-8);
  background: var(--xue-primary-subtle);
  color: var(--xue-primary);
}

.xue-parent-meeting-card section {
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
