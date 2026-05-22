<script setup lang="ts">
import { computed } from 'vue';

type SwitchSize = 'small' | 'medium' | 'large';

const props = withDefaults(
  defineProps<{
    modelValue?: boolean;
    size?: SwitchSize;
    disabled?: boolean;
    ariaLabel?: string;
  }>(),
  {
    modelValue: false,
    size: 'small',
    disabled: false,
    ariaLabel: '开关',
  },
);

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
  change: [value: boolean];
}>();

const isOn = computed(() => props.modelValue);

const toggle = () => {
  if (props.disabled) return;
  const nextValue = !isOn.value;
  emit('update:modelValue', nextValue);
  emit('change', nextValue);
};
</script>

<template>
  <button
    class="xue-switch"
    :class="[
      `xue-switch--${props.size}`,
      {
        'is-on': isOn,
        'is-disabled': props.disabled,
      },
    ]"
    type="button"
    role="switch"
    :aria-checked="isOn"
    :aria-label="props.ariaLabel"
    :disabled="props.disabled"
    data-figma-node="1503:8038"
    @click="toggle"
  >
    <span class="xue-switch__track" aria-hidden="true">
      <span class="xue-switch__thumb" />
    </span>
  </button>
</template>

<style scoped lang="scss">
.xue-switch {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;

  &.is-disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &--small {
    width: 28px;
    height: 16px;

    .xue-switch__track {
      width: 28px;
      height: 16px;
      border-radius: 16px;
    }

    .xue-switch__thumb {
      width: 10px;
      height: 10px;
      transform: translateX(3px);
    }

    &.is-on .xue-switch__thumb {
      transform: translateX(15px);
    }
  }

  &--medium {
    width: 36px;
    height: 20px;

    .xue-switch__track {
      width: 36px;
      height: 20px;
      border-radius: 20px;
    }

    .xue-switch__thumb {
      width: 12px;
      height: 12px;
      transform: translateX(4px);
    }

    &.is-on .xue-switch__thumb {
      transform: translateX(20px);
    }
  }

  &--large {
    width: 44px;
    height: 24px;

    .xue-switch__track {
      width: 44px;
      height: 24px;
      border-radius: 24px;
    }

    .xue-switch__thumb {
      width: 16px;
      height: 16px;
      transform: translateX(4px);
    }

    &.is-on .xue-switch__thumb {
      transform: translateX(24px);
    }
  }
}

.xue-switch__track {
  display: flex;
  align-items: center;
  background: var(--xue-border);
  transition: background-color 0.16s ease;
}

.xue-switch.is-on .xue-switch__track {
  background: var(--xue-primary);
}

.xue-switch__thumb {
  display: block;
  border-radius: 50%;
  background: var(--xue-white);
  transition: transform 0.16s ease;
}
</style>
