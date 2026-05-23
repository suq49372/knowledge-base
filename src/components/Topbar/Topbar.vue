<script setup lang="ts">
import XueAvatar from '../Avatar/Avatar.vue';
import XueIcon, { type XueIconName } from '../Icon/Icon.vue';

export type XueTopbarAction = {
  icon: XueIconName;
  label: string;
};

const props = withDefaults(
  defineProps<{
    title?: string;
    userName?: string;
    avatarShape?: 'circle' | 'square';
    avatarType?: 'icon' | 'image' | 'text';
    avatarText?: string;
    actions?: XueTopbarAction[];
  }>(),
  {
    title: '页面名称',
    userName: '姓名',
    avatarShape: 'circle',
    avatarType: 'icon',
    avatarText: 'A',
    actions: () => [
      { icon: 'service', label: '客服' },
      { icon: 'download', label: '下载' },
      { icon: 'safe', label: '安全' },
      { icon: 'cloud', label: '云端' },
      { icon: 'more', label: '更多' },
    ],
  },
);

const emit = defineEmits<{
  action: [action: XueTopbarAction];
}>();
</script>

<template>
  <header class="xue-topbar" data-figma-node="1502:4831">
    <div class="xue-topbar__title">{{ props.title }}</div>
    <div class="xue-topbar__right">
      <nav class="xue-topbar__actions" aria-label="顶部操作">
        <button
          v-for="action in props.actions"
          :key="action.label"
          class="xue-topbar__action"
          type="button"
          :aria-label="action.label"
          @click="emit('action', action)"
        >
          <XueIcon :name="action.icon" :size="18" />
        </button>
      </nav>
      <span class="xue-topbar__divider" aria-hidden="true" />
      <XueAvatar
        :shape="props.avatarShape"
        :type="props.avatarType"
        :text="props.avatarText"
        :size="32"
        aria-label="用户头像"
      />
      <span class="xue-topbar__name">{{ props.userName }}</span>
    </div>
  </header>
</template>

<style scoped lang="scss">
.xue-topbar {
  display: flex;
  width: 100%;
  min-width: 640px;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--xue-padding-24);
  background: var(--xue-white);
  box-sizing: border-box;
  color: var(--xue-text-primary);
  font-family: var(--xue-font-family);
}

.xue-topbar__title {
  color: var(--xue-text-secondary);
  font-size: var(--xue-font-size-14);
  line-height: var(--xue-line-height-14);
}

.xue-topbar__right,
.xue-topbar__actions {
  display: inline-flex;
  align-items: center;
}

.xue-topbar__right {
  gap: 16px;
}

.xue-topbar__actions {
  gap: 20px;
}

.xue-topbar__action {
  display: inline-flex;
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
  border: 0;
  background: transparent;
  color: var(--xue-text-secondary);
  cursor: pointer;
  padding: 0;
  transition: color 0.16s ease;

  &:hover {
    color: var(--xue-text-primary);
  }
}

.xue-topbar__divider {
  width: 1px;
  height: 18px;
  background: var(--xue-divider);
}

.xue-topbar__name {
  margin-left: -8px;
  font-size: var(--xue-font-size-14);
  line-height: var(--xue-line-height-14);
  font-weight: var(--xue-font-weight-medium);
  white-space: nowrap;
}
</style>
