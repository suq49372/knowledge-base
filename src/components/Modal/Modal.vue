<script setup lang="ts">
import XueButton from '../Button/Button.vue';

type ModalSize = 'small' | 'medium' | 'large' | 'max';

const props = withDefaults(
  defineProps<{
    open?: boolean;
    size?: ModalSize;
    title?: string;
    cancelText?: string;
    confirmText?: string;
    closeOnMask?: boolean;
  }>(),
  {
    open: false,
    size: 'medium',
    title: '对话框标题',
    cancelText: '取消',
    confirmText: '保存',
    closeOnMask: true,
  },
);

const emit = defineEmits<{
  'update:open': [value: boolean];
  close: [];
  cancel: [];
  confirm: [];
}>();

function requestClose() {
  emit('update:open', false);
  emit('close');
}

function handleMaskClick() {
  if (props.closeOnMask) {
    requestClose();
  }
}
</script>

<template>
  <Teleport to="body">
    <div v-if="props.open" class="xue-modal-layer" data-figma-node="12212:10430">
      <button class="xue-modal-layer__mask" aria-label="关闭弹窗" @click="handleMaskClick" />
      <section class="xue-modal" :class="`xue-modal--${props.size}`" role="dialog" aria-modal="true">
        <header class="xue-modal__header">
          <h2 class="xue-modal__title">{{ props.title }}</h2>
          <button class="xue-modal__close" type="button" aria-label="关闭" @click="requestClose">
            ×
          </button>
        </header>
        <main class="xue-modal__body">
          <slot>
            <div class="xue-modal__placeholder">内容区</div>
          </slot>
        </main>
        <footer class="xue-modal__footer">
          <slot name="footer">
            <XueButton content="outline" color="gray" @click="emit('cancel')">
              {{ props.cancelText }}
            </XueButton>
            <XueButton color="blue" @click="emit('confirm')">
              {{ props.confirmText }}
            </XueButton>
          </slot>
        </footer>
      </section>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.xue-modal-layer {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: grid;
  place-items: center;
  padding: 32px;

  &__mask {
    position: absolute;
    inset: 0;
    border: 0;
    background: rgb(15 17 20 / 42%);
    cursor: pointer;
  }
}

.xue-modal {
  position: relative;
  z-index: 1;
  display: flex;
  max-height: calc(100vh - 64px);
  flex-direction: column;
  overflow: hidden;
  border-radius: var(--xue-radius-12);
  background: var(--xue-white);
  box-shadow: var(--xue-shadow-card);

  &--small {
    width: 400px;
  }

  &--medium {
    width: 520px;
  }

  &--large {
    width: 840px;
  }

  &--max {
    width: min(1120px, calc(100vw - 64px));
  }

  &__header {
    display: flex;
    height: 64px;
    align-items: center;
    gap: 8px;
    padding: 20px;
  }

  &__title {
    flex: 1;
    margin: 0;
    color: var(--xue-text-primary);
    font-size: var(--xue-font-size-16);
    font-weight: 500;
    line-height: var(--xue-line-height-16);
  }

  &__close {
    width: 24px;
    height: 24px;
    border: 0;
    border-radius: var(--xue-radius-4);
    background: transparent;
    color: var(--xue-text-secondary);
    cursor: pointer;

    &:hover {
      background: var(--xue-hover-mask);
      color: var(--xue-text-primary);
    }
  }

  &__body {
    min-height: 44px;
    flex: 1;
    overflow: auto;
    padding: 0 20px;
  }

  &__placeholder {
    display: grid;
    min-height: 116px;
    place-items: center;
    background: var(--xue-surface);
    color: var(--xue-text-secondary);
    font-size: var(--xue-font-size-14);
  }

  &__footer {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    padding: 20px;
  }
}

@media (max-width: 720px) {
  .xue-modal-layer {
    padding: 16px;
  }

  .xue-modal {
    width: 100%;
  }
}
</style>
