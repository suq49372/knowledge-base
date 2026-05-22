<script setup lang="ts">
import { ref } from 'vue';
import { XueButton, XueModal, XuePagination, XueSearchInput, XueSelectField, XueTag, XueTextInput } from './components';

const inputValue = ref('已输入内容');
const searchValue = ref('已输入');
const modalOpen = ref(false);
</script>

<template>
  <main class="demo-page">
    <section class="demo-panel">
      <h1>基础组件闭环预览</h1>
      <div class="demo-grid">
        <XueButton color="blue" @click="modalOpen = true">打开弹窗</XueButton>
        <XueButton content="outline" color="gray">次要按钮</XueButton>
        <XueButton content="textButton" color="red">删除</XueButton>
        <XueTextInput v-model="inputValue" states="filled" />
        <XueSearchInput v-model="searchValue" state="filled" />
        <XueSelectField state="filled" />
        <XueTag color="blue">标签样式</XueTag>
        <XuePagination show-size-changer />
      </div>
    </section>
    <XueModal v-model:open="modalOpen" title="保存配置" confirm-text="保存" @close="modalOpen = false">
      <div class="demo-modal-body">这里可以放表单、说明或操作结果。</div>
    </XueModal>
  </main>
</template>

<style scoped lang="scss">
.demo-page {
  min-height: 100vh;
  padding: 48px;
}

.demo-panel {
  max-width: 960px;
  margin: 0 auto;

  h1 {
    margin: 0 0 24px;
    font-size: 28px;
  }
}

.demo-grid {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
}

.demo-modal-body {
  display: grid;
  min-height: 160px;
  place-items: center;
  background: var(--xue-surface);
  color: var(--xue-text-secondary);
}
</style>
