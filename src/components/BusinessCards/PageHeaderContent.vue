<script setup lang="ts">
import XueBreadcrumb from '../Breadcrumb/Breadcrumb.vue';
import XueButton from '../Button/Button.vue';
import XueSearchInput from '../SearchInput/SearchInput.vue';
import XueSelectField from '../SelectField/SelectField.vue';
import XueTabs from '../Tabs/Tabs.vue';

const props = withDefaults(
  defineProps<{
    title?: string;
    activeTab?: string;
  }>(),
  {
    title: '页面标题',
    activeTab: 'overview',
  },
);

const tabs = [
  { label: '全部', value: 'overview' },
  { label: '待处理', value: 'todo' },
  { label: '已完成', value: 'done' },
];
</script>

<template>
  <section class="xue-page-header-content" data-figma-node="11658:11060">
    <XueBreadcrumb :items="[{ label: '一级页面', href: '#' }, { label: props.title }]" />
    <div class="xue-page-header-content__title">
      <h1>{{ props.title }}</h1>
      <XueButton color="blue">主要操作</XueButton>
    </div>
    <XueTabs :items="tabs" :model-value="props.activeTab" />
    <div class="xue-page-header-content__meta">
      <span>更新时间：2024.4.27</span>
      <span>负责人：教研团队</span>
    </div>
    <div class="xue-page-header-content__filters">
      <XueSearchInput state="filled" />
      <XueSelectField state="default" placeholder="请选择类型" />
      <XueSelectField state="default" placeholder="请选择状态" />
      <XueButton content="outline" color="gray">重置</XueButton>
    </div>
  </section>
</template>

<style scoped lang="scss">
.xue-page-header-content {
  display: flex;
  width: 1364px;
  flex-direction: column;
  gap: var(--xue-padding-16);
  border-radius: var(--xue-radius-8);
  background: var(--xue-white);
  padding: var(--xue-padding-20);
  font-family: var(--xue-font-family);
}

.xue-page-header-content__title,
.xue-page-header-content__meta,
.xue-page-header-content__filters {
  display: flex;
  align-items: center;
}

.xue-page-header-content__title {
  justify-content: space-between;
  gap: var(--xue-padding-24);
}

.xue-page-header-content h1 {
  margin: 0;
  color: var(--xue-text-primary);
  font-size: var(--xue-font-size-20);
  font-weight: var(--xue-font-weight-medium);
  line-height: var(--xue-line-height-20);
}

.xue-page-header-content__meta {
  gap: var(--xue-padding-24);
  color: var(--xue-text-secondary);
  font-size: var(--xue-font-size-14);
  line-height: var(--xue-line-height-14);
}

.xue-page-header-content__filters {
  gap: var(--xue-padding-12);
}
</style>
