<script setup lang="ts">
import { computed } from 'vue';
import XueIcon, { type XueIconName } from '../Icon/Icon.vue';
import XueLogo from '../Logo/Logo.vue';

export type XueSidebarItem = {
  label: string;
  value: string;
  icon?: XueIconName;
  active?: boolean;
  open?: boolean;
  children?: Array<{
    label: string;
    value: string;
    active?: boolean;
  }>;
};

const props = withDefaults(
  defineProps<{
    collapsed?: boolean;
    items?: XueSidebarItem[];
    logoText?: string;
  }>(),
  {
    collapsed: false,
    logoText: '老师平台',
    items: () => [
      {
        label: 'Navigation',
        value: 'overview',
        icon: 'grid-fill',
        open: true,
        children: [
          { label: 'Navigation', value: 'overview-1', active: true },
          { label: 'Navigation', value: 'overview-2' },
          { label: 'Navigation', value: 'overview-3' },
          { label: 'Navigation', value: 'overview-4' },
          { label: 'Navigation', value: 'overview-5' },
          { label: 'Navigation', value: 'overview-6' },
        ],
      },
      { label: 'Navigation', value: 'data', icon: 'grid-fill' },
      { label: 'Navigation', value: 'content', icon: 'grid-fill' },
      { label: 'Navigation', value: 'settings', icon: 'grid-fill' },
      { label: 'Navigation', value: 'tools', icon: 'grid-fill' },
      { label: 'Navigation', value: 'service', icon: 'grid-fill' },
      { label: 'Navigation', value: 'cloud', icon: 'grid-fill' },
      { label: 'Navigation', value: 'home', icon: 'grid-fill' },
      { label: 'Navigation', value: 'files', icon: 'grid-fill' },
      { label: 'Navigation', value: 'more', icon: 'grid-fill' },
    ],
  },
);

const emit = defineEmits<{
  select: [value: string];
}>();

const collapsedItems = computed(() => {
  const firstChild = props.items[0]?.children?.find((child) => child.active);
  return props.items.map((item, index) => ({
    ...item,
    active: index === 1 || item.active || Boolean(index === 0 && firstChild),
  }));
});
</script>

<template>
  <aside
    class="xue-sidebar"
    :class="{ 'xue-sidebar--collapsed': props.collapsed }"
    data-figma-node="11590:7161"
  >
    <header class="xue-sidebar__header">
      <div v-if="!props.collapsed" class="xue-sidebar__logo">
        <XueLogo :alt="props.logoText" :width="94" />
      </div>
      <button class="xue-sidebar__fold" type="button" aria-label="折叠菜单">
        <XueIcon name="menu-fold" :size="18" />
      </button>
    </header>

    <nav class="xue-sidebar__nav" aria-label="Sidebar navigation">
      <template v-if="props.collapsed">
        <button
          v-for="item in collapsedItems"
          :key="item.value"
          class="xue-sidebar__icon-item"
          :class="{ 'is-active': item.active }"
          type="button"
          :aria-label="item.label"
          @click="emit('select', item.value)"
        >
          <XueIcon :name="item.icon || 'grid-fill'" :size="20" />
        </button>
      </template>

      <template v-else>
        <div v-for="item in props.items" :key="item.value" class="xue-sidebar__group">
          <button
            class="xue-sidebar__item"
            :class="{ 'is-active': item.active }"
            type="button"
            @click="emit('select', item.value)"
          >
            <XueIcon :name="item.icon || 'grid-fill'" :size="20" />
            <span class="xue-sidebar__label">{{ item.label }}</span>
            <XueIcon v-if="item.children?.length" class="xue-sidebar__chevron" name="down" :size="16" />
          </button>

          <div v-if="item.open && item.children?.length" class="xue-sidebar__submenu">
            <button
              v-for="child in item.children"
              :key="child.value"
              class="xue-sidebar__subitem"
              :class="{ 'is-active': child.active }"
              type="button"
              @click="emit('select', child.value)"
            >
              {{ child.label }}
            </button>
          </div>
        </div>
      </template>
    </nav>
  </aside>
</template>

<style scoped lang="scss">
.xue-sidebar {
  display: flex;
  width: 180px;
  min-height: 982px;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;
  padding: 24px 16px;
  overflow: hidden;
  background: linear-gradient(170deg, var(--xue-sidebar-start) 0%, var(--xue-sidebar-end) 50%);
  color: var(--xue-text-primary);
  font-family: var(--xue-font-family);
  transition: width 0.16s ease;

  &--collapsed {
    width: 72px;
    align-items: center;
    background: linear-gradient(155deg, var(--xue-sidebar-start) 0%, var(--xue-sidebar-end) 50%);
  }
}

.xue-sidebar__header {
  display: flex;
  width: 100%;
  height: 28px;
  align-items: center;
  justify-content: space-between;
}

.xue-sidebar--collapsed .xue-sidebar__header {
  justify-content: center;
}

.xue-sidebar__logo {
  display: inline-flex;
  align-items: center;
  padding-left: var(--xue-padding-8);
}

.xue-sidebar__fold {
  display: inline-flex;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  border: 0;
  background: transparent;
  color: var(--xue-text-secondary);
  cursor: pointer;
}

.xue-sidebar__nav,
.xue-sidebar__group,
.xue-sidebar__submenu {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.xue-sidebar__nav {
  width: 100%;
  align-items: center;
}

.xue-sidebar__group {
  width: 148px;
}

.xue-sidebar__item,
.xue-sidebar__subitem,
.xue-sidebar__icon-item {
  height: var(--xue-control-lg);
  border: 0;
  border-radius: var(--xue-radius-6);
  background: transparent;
  color: var(--xue-text-primary);
  font-family: var(--xue-font-family);
  font-size: var(--xue-font-size-14);
  line-height: var(--xue-line-height-14);
  cursor: pointer;
  transition: background-color 0.16s ease, color 0.16s ease;
}

.xue-sidebar__item {
  display: flex;
  width: 148px;
  align-items: center;
  gap: 6px;
  padding: 0 var(--xue-padding-8);
  text-align: left;

  &:hover {
    background: rgb(255 255 255 / 50%);
  }
}

.xue-sidebar__label {
  min-width: 0;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.xue-sidebar__chevron {
  color: var(--xue-text-secondary);
}

.xue-sidebar__subitem {
  width: 148px;
  padding: 0 var(--xue-padding-8) 0 34px;
  text-align: left;

  &.is-active {
    background: var(--xue-white);
    color: var(--xue-primary);
  }

  &:hover:not(.is-active) {
    background: rgb(255 255 255 / 45%);
  }
}

.xue-sidebar__icon-item {
  display: inline-flex;
  width: 40px;
  align-items: center;
  justify-content: center;
  padding: 0;
  color: var(--xue-text-secondary);

  &.is-active {
    background: var(--xue-white);
    color: var(--xue-primary);
  }

  &:hover:not(.is-active) {
    background: rgb(255 255 255 / 45%);
  }
}
</style>
