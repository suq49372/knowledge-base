<script setup lang="ts">
type ButtonContent = 'filled' | 'outline' | 'textButton';
type ButtonComposition = 'text' | 'icon+text' | 'icon';
type ButtonColor = 'blue' | 'green' | 'yellow' | 'red' | 'gray';
type ButtonSize = 'sm' | 'md' | 'lg';

const props = withDefaults(
  defineProps<{
    content?: ButtonContent;
    composition?: ButtonComposition;
    color?: ButtonColor;
    size?: ButtonSize;
    disabled?: boolean;
    nativeType?: 'button' | 'submit' | 'reset';
    ariaLabel?: string;
  }>(),
  {
    content: 'filled',
    composition: 'text',
    color: 'blue',
    size: 'md',
    disabled: false,
    nativeType: 'button',
    ariaLabel: undefined,
  },
);
</script>

<template>
  <button
    class="xue-button"
    :class="[
      `xue-button--${props.content}`,
      `xue-button--${props.color}`,
      `xue-button--${props.size}`,
      `xue-button--${props.composition.replace('+', '-')}`,
    ]"
    :type="props.nativeType"
    :disabled="props.disabled"
    :aria-label="props.ariaLabel"
    data-figma-node="2313:6363"
  >
    <span v-if="$slots.icon" class="xue-button__icon">
      <slot name="icon" />
    </span>
    <span v-if="props.composition !== 'icon'" class="xue-button__label">
      <slot>按钮</slot>
    </span>
  </button>
</template>

<style scoped lang="scss">
@use "sass:map";

$button-colors: (
  "blue": (
    default: var(--xue-primary),
    hover: var(--xue-primary-hover),
    pressed: var(--xue-primary-pressed),
    disabled: var(--xue-primary-disabled),
  ),
  "green": (
    default: var(--xue-success),
    hover: var(--xue-success-hover),
    pressed: var(--xue-success-pressed),
    disabled: var(--xue-success-disabled),
  ),
  "yellow": (
    default: var(--xue-warning),
    hover: var(--xue-warning-hover),
    pressed: var(--xue-warning-pressed),
    disabled: var(--xue-warning-disabled),
  ),
  "red": (
    default: var(--xue-danger),
    hover: var(--xue-danger-hover),
    pressed: var(--xue-danger-pressed),
    disabled: var(--xue-danger-disabled),
  ),
  "gray": (
    default: var(--xue-text-secondary),
    hover: var(--xue-text-primary),
    pressed: var(--xue-text-primary),
    disabled: var(--xue-text-disabled),
  ),
);

.xue-button {
  border: 1px solid transparent;
  border-radius: var(--xue-radius-6);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-width: 56px;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 0.16s ease, border-color 0.16s ease, color 0.16s ease;

  &:disabled {
    cursor: not-allowed;
  }

  &--sm {
    height: var(--xue-control-sm);
    padding: 0 16px;
    font-size: var(--xue-font-size-12);
    line-height: var(--xue-line-height-12);
  }

  &--md {
    height: var(--xue-control-md);
    padding: 0 20px;
    font-size: var(--xue-font-size-14);
    line-height: var(--xue-line-height-14);
  }

  &--lg {
    height: var(--xue-control-lg);
    padding: 0 20px;
    font-size: var(--xue-font-size-14);
    line-height: var(--xue-line-height-14);
  }

  &--icon {
    min-width: 20px;
    width: 20px;
    height: 20px;
    padding: 0;
  }

  &__icon {
    display: inline-flex;
    width: 16px;
    height: 16px;
    align-items: center;
    justify-content: center;
  }
}

@each $name, $tone in $button-colors {
  .xue-button--filled.xue-button--#{$name} {
    background: map.get($tone, default);
    color: var(--xue-white);

    &:hover:not(:disabled) {
      background: map.get($tone, hover);
    }

    &:active:not(:disabled) {
      background: map.get($tone, pressed);
    }

    &:disabled {
      background: map.get($tone, disabled);
      color: var(--xue-white);
    }
  }

  .xue-button--outline.xue-button--#{$name} {
    background: var(--xue-white);
    border-color: map.get($tone, default);
    color: map.get($tone, default);

    @if $name == "gray" {
      border-color: var(--xue-border);
      color: var(--xue-text-primary);
    }

    &:hover:not(:disabled) {
      border-color: map.get($tone, hover);
      color: map.get($tone, hover);
    }

    &:active:not(:disabled) {
      border-color: map.get($tone, pressed);
      color: map.get($tone, pressed);
    }

    &:disabled {
      border-color: var(--xue-divider);
      color: var(--xue-text-disabled);
    }
  }

  .xue-button--textButton.xue-button--#{$name} {
    background: transparent;
    color: map.get($tone, default);
    min-width: auto;
    padding-inline: 0;

    &:hover:not(:disabled) {
      color: map.get($tone, hover);
    }

    &:active:not(:disabled) {
      color: map.get($tone, pressed);
    }

    &:disabled {
      color: var(--xue-text-disabled);
    }
  }
}
</style>
