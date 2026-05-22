<script setup lang="ts">
import { computed } from 'vue';

type CheckboxState = 'unchecked' | 'hover' | 'checked' | 'unchecked-disabled' | 'indeterminate' | 'checked-disabled';
type CheckboxType = 'icon' | 'text';

const props = withDefaults(
  defineProps<{
    modelValue?: boolean;
    state?: CheckboxState;
    type?: CheckboxType;
    label?: string;
    disabled?: boolean;
    indeterminate?: boolean;
  }>(),
  {
    modelValue: undefined,
    state: 'unchecked',
    type: 'text',
    label: '复选框',
    disabled: false,
    indeterminate: undefined,
  },
);

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
  change: [value: boolean];
}>();

const checked = computed(() => props.modelValue ?? props.state.includes('checked'));
const mixed = computed(() => props.indeterminate ?? props.state === 'indeterminate');
const disabled = computed(() => props.disabled || props.state.includes('disabled'));

const handleChange = () => {
  if (disabled.value) return;
  const nextValue = !checked.value;
  emit('update:modelValue', nextValue);
  emit('change', nextValue);
};
</script>

<template>
  <label
    class="xue-checkbox"
    :class="[
      `xue-checkbox--${props.type}`,
      `xue-checkbox--${props.state}`,
      {
        'is-checked': checked,
        'is-indeterminate': mixed,
        'is-disabled': disabled,
      },
    ]"
    data-figma-node="5377:9946"
  >
    <input
      class="xue-checkbox__input"
      type="checkbox"
      :checked="checked"
      :disabled="disabled"
      @change="handleChange"
    >
    <span class="xue-checkbox__control" aria-hidden="true" />
    <span v-if="props.type === 'text'" class="xue-checkbox__label">{{ props.label }}</span>
  </label>
</template>

<style scoped lang="scss">
.xue-checkbox {
  display: inline-flex;
  align-items: center;
  color: var(--xue-text-primary);
  font-family: var(--xue-font-family);
  font-size: var(--xue-font-size-14);
  line-height: var(--xue-line-height-14);
  cursor: pointer;

  &--text {
    gap: 8px;
  }

  &.is-disabled {
    color: var(--xue-text-tertiary);
    cursor: not-allowed;
  }
}

.xue-checkbox__input {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
}

.xue-checkbox__control {
  position: relative;
  width: 16px;
  height: 16px;
  border: 1px solid var(--xue-text-tertiary);
  border-radius: var(--xue-radius-4);
  background: var(--xue-white);
  transition: background-color 0.16s ease, border-color 0.16s ease;
}

.xue-checkbox:hover:not(.is-disabled) .xue-checkbox__control,
.xue-checkbox--hover .xue-checkbox__control {
  border-color: var(--xue-primary);
}

.xue-checkbox.is-checked .xue-checkbox__control,
.xue-checkbox.is-indeterminate .xue-checkbox__control {
  border-color: var(--xue-primary);
  background: var(--xue-primary);
}

.xue-checkbox.is-checked .xue-checkbox__control::after {
  position: absolute;
  left: 4px;
  top: 1px;
  width: 5px;
  height: 9px;
  border: solid var(--xue-white);
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  content: '';
}

.xue-checkbox.is-indeterminate .xue-checkbox__control::after {
  position: absolute;
  left: 4px;
  top: 7px;
  width: 8px;
  height: 2px;
  border-radius: 99px;
  background: var(--xue-white);
  content: '';
}

.xue-checkbox.is-disabled .xue-checkbox__control {
  border-color: var(--xue-divider);
  background: var(--xue-surface-light);
}

.xue-checkbox.is-checked.is-disabled .xue-checkbox__control {
  border-color: var(--xue-primary-disabled);
  background: var(--xue-primary-disabled);
}

.xue-checkbox__label {
  min-width: 0;
  white-space: nowrap;
}
</style>
