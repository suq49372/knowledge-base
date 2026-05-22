<script setup lang="ts">
type TagColor = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink' | 'gray';
type TagStyle = 'light' | 'solid';

const props = withDefaults(
  defineProps<{
    color?: TagColor;
    styleType?: TagStyle;
    closable?: boolean;
    icon?: boolean;
  }>(),
  {
    color: 'red',
    styleType: 'light',
    closable: false,
    icon: false,
  },
);

const emit = defineEmits<{
  close: [];
}>();
</script>

<template>
  <span
    class="xue-tag"
    :class="[`xue-tag--${props.color}`, `xue-tag--${props.styleType}`, { 'xue-tag--closable': props.closable }]"
    data-figma-node="5117:24061"
  >
    <span v-if="props.icon" class="xue-tag__icon" aria-hidden="true"></span>
    <span class="xue-tag__label"><slot>标签样式</slot></span>
    <button v-if="props.closable" class="xue-tag__close" type="button" aria-label="关闭标签" @click="emit('close')">
      ×
    </button>
  </span>
</template>

<style scoped lang="scss">
@use "sass:list";

$tag-colors: (
  "red": (#ff4c4c, #ffdbdb),
  "orange": (#ff7a1a, #ffe3cf),
  "yellow": (#ffb21a, #ffecc6),
  "green": (#00c27b, #ccf3e5),
  "blue": (#336aff, #d6e1ff),
  "purple": (#6655ff, #e4e0ff),
  "pink": (#e82b8f, #ffd6eb),
  "gray": (#565d66, #e6e7eb),
);

.xue-tag {
  height: 24px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  border-radius: var(--xue-radius-4);
  padding: 0 8px;
  font-size: var(--xue-font-size-12);
  line-height: var(--xue-line-height-12);
  white-space: nowrap;

  &--closable {
    padding-right: 6px;
  }

  &__icon {
    width: 14px;
    height: 14px;
    display: inline-flex;
    align-items: flex-end;
    justify-content: center;
    gap: 2px;

    &::before,
    &::after {
      content: "";
      width: 3px;
      border-radius: 2px 2px 0 0;
      background: currentColor;
    }

    &::before {
      height: 7px;
    }

    &::after {
      height: 11px;
    }
  }

  &__close {
    width: 14px;
    height: 14px;
    border: 0;
    background: transparent;
    color: currentColor;
    cursor: pointer;
    opacity: 0.72;
    padding: 0;
    line-height: 1;
  }
}

@each $name, $pair in $tag-colors {
  .xue-tag--#{$name}.xue-tag--light {
    background: list.nth($pair, 2);
    color: list.nth($pair, 1);
  }

  .xue-tag--#{$name}.xue-tag--solid {
    background: list.nth($pair, 1);
    color: var(--xue-white);
  }
}
</style>
