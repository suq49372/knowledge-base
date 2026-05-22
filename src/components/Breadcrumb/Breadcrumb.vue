<script setup lang="ts">
type BreadcrumbState = 'idle' | 'more';

export type XueBreadcrumbItem = {
  label: string;
  href?: string;
};

const props = withDefaults(
  defineProps<{
    items?: XueBreadcrumbItem[];
    state?: BreadcrumbState;
  }>(),
  {
    items: () => [
      { label: '首页', href: '#' },
      { label: '二级页面' },
    ],
    state: 'idle',
  },
);

const displayItems = () => {
  if (props.state !== 'more' || props.items.length <= 4) {
    return props.items;
  }

  return [props.items[0], props.items[1], { label: '...' }, props.items[props.items.length - 1]];
};
</script>

<template>
  <nav class="xue-breadcrumb" aria-label="Breadcrumb" data-figma-node="1500:3734">
    <ol class="xue-breadcrumb__list">
      <li
        v-for="(item, index) in displayItems()"
        :key="`${item.label}-${index}`"
        class="xue-breadcrumb__entry"
      >
        <span v-if="index > 0" class="xue-breadcrumb__separator" aria-hidden="true">/</span>
        <a
          v-if="item.href && index < displayItems().length - 1"
          class="xue-breadcrumb__item"
          :href="item.href"
        >
          {{ item.label }}
        </a>
        <span
          v-else
          class="xue-breadcrumb__item"
          :class="{ 'is-current': index === displayItems().length - 1 }"
          :aria-current="index === displayItems().length - 1 ? 'page' : undefined"
        >
          {{ item.label }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<style scoped lang="scss">
.xue-breadcrumb {
  color: var(--xue-text-secondary);
  font-family: var(--xue-font-family);
  font-size: var(--xue-font-size-12);
  line-height: var(--xue-line-height-12);
}

.xue-breadcrumb__list {
  display: flex;
  align-items: center;
  gap: var(--xue-padding-6);
  min-width: 0;
  margin: 0;
  padding: 0;
  list-style: none;
}

.xue-breadcrumb__entry {
  display: inline-flex;
  align-items: center;
  gap: var(--xue-padding-6);
  min-width: 0;
}

.xue-breadcrumb__item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  padding: 0 var(--xue-padding-2);
  border-radius: var(--xue-radius-4);
  color: var(--xue-text-secondary);
  text-decoration: none;
  white-space: nowrap;

  &[href]:hover {
    color: var(--xue-primary);
  }

  &.is-current {
    color: var(--xue-text-primary);
  }
}

.xue-breadcrumb__separator {
  color: var(--xue-border);
  font-size: var(--xue-font-size-14);
  line-height: var(--xue-line-height-14);
}
</style>
