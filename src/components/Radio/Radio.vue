<script setup lang="ts">
type RadioState = 'unchecked' | 'hover' | 'checked' | 'unchecked-disabled' | 'checked-disabled';
type RadioType = 'icon' | 'text';

const props = withDefaults(
  defineProps<{
    modelValue?: boolean;
    state?: RadioState;
    type?: RadioType;
    label?: string;
    name?: string;
    disabled?: boolean;
  }>(),
  {
    modelValue: undefined,
    state: 'unchecked',
    type: 'text',
    label: '单选',
    name: undefined,
    disabled: false,
  },
);

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
  change: [value: boolean];
}>();

const isChecked = () => props.modelValue ?? props.state.includes('checked');
const isDisabled = () => props.disabled || props.state.includes('disabled');

const handleChange = () => {
  if (isDisabled()) return;
  emit('update:modelValue', true);
  emit('change', true);
};
</script>

<template>
  <label
    class="xue-radio"
    :class="[
      `xue-radio--${props.type}`,
      `xue-radio--${props.state}`,
      {
        'is-checked': isChecked(),
        'is-disabled': isDisabled(),
      },
    ]"
    data-figma-node="11750:17744"
  >
    <input
      class="xue-radio__input"
      type="radio"
      :name="props.name"
      :checked="isChecked()"
      :disabled="isDisabled()"
      @change="handleChange"
    >
    <span class="xue-radio__control" aria-hidden="true" />
    <span v-if="props.type === 'text'" class="xue-radio__label">{{ props.label }}</span>
  </label>
</template>

<style scoped lang="scss">
.xue-radio {
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

.xue-radio__input {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
}

.xue-radio__control {
  width: 14px;
  height: 14px;
  border: 1px solid var(--xue-text-tertiary);
  border-radius: 50%;
  background: var(--xue-white);
  transition: border-color 0.16s ease, border-width 0.16s ease;
}

.xue-radio:hover:not(.is-disabled) .xue-radio__control,
.xue-radio--hover .xue-radio__control {
  border-color: var(--xue-primary);
}

.xue-radio.is-checked .xue-radio__control {
  border: 4px solid var(--xue-primary);
}

.xue-radio.is-disabled .xue-radio__control {
  border-color: var(--xue-divider);
}

.xue-radio.is-checked.is-disabled .xue-radio__control {
  border: 4px solid var(--xue-primary-disabled);
}

.xue-radio__label {
  min-width: 0;
  white-space: nowrap;
}
</style>
