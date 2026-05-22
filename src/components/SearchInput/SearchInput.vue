<script setup lang="ts">
import { computed } from 'vue';

type SearchInputState = 'idle' | 'focused' | 'filled' | 'disabled';

const props = withDefaults(
  defineProps<{
    modelValue?: string;
    placeholder?: string;
    state?: SearchInputState;
    clearable?: boolean;
  }>(),
  {
    modelValue: '',
    placeholder: '搜索',
    state: 'idle',
    clearable: true,
  },
);

const emit = defineEmits<{
  'update:modelValue': [value: string];
  clear: [];
}>();

const disabled = computed(() => props.state === 'disabled');
const isFocused = computed(() => props.state === 'focused');
const displayValue = computed(() => (props.state === 'filled' || props.state === 'focused' ? props.modelValue : ''));
const showClear = computed(() => props.clearable && !disabled.value && displayValue.value.length > 0);

function updateValue(event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).value);
}

function clearValue() {
  emit('update:modelValue', '');
  emit('clear');
}
</script>

<template>
  <label
    class="xue-search-input"
    :class="[`xue-search-input--${props.state}`, { 'xue-search-input--focused': isFocused }]"
    data-figma-node="7515:8331"
  >
    <span class="xue-search-input__icon" aria-hidden="true"></span>
    <input
      class="xue-search-input__control"
      :value="displayValue"
      :placeholder="props.placeholder"
      :disabled="disabled"
      @input="updateValue"
    />
    <button v-if="showClear" class="xue-search-input__clear" type="button" aria-label="清空搜索" @click="clearValue">
      ×
    </button>
  </label>
</template>

<style scoped lang="scss">
.xue-search-input {
  width: 240px;
  min-width: 120px;
  height: var(--xue-control-lg);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  overflow: hidden;
  border: 1px solid var(--xue-border);
  border-radius: var(--xue-radius-6);
  background: var(--xue-white);
  padding: 0 12px;
  color: var(--xue-text-primary);
  font-size: var(--xue-font-size-14);
  line-height: var(--xue-line-height-14);
  transition: border-color 0.16s ease, background-color 0.16s ease;

  &:focus-within,
  &--focused {
    border-color: var(--xue-primary);
  }

  &--disabled {
    border-color: var(--xue-divider);
    background: var(--xue-surface);
    color: var(--xue-text-tertiary);
  }

  &__icon {
    position: relative;
    width: 16px;
    height: 16px;
    flex: none;

    &::before {
      content: "";
      position: absolute;
      width: 9px;
      height: 9px;
      top: 2px;
      left: 2px;
      border: 1.5px solid var(--xue-text-secondary);
      border-radius: 50%;
    }

    &::after {
      content: "";
      position: absolute;
      width: 6px;
      height: 1.5px;
      right: 1px;
      bottom: 3px;
      border-radius: 999px;
      background: var(--xue-text-secondary);
      transform: rotate(45deg);
      transform-origin: center;
    }
  }

  &--disabled &__icon {
    opacity: 0.38;
  }

  &__control {
    flex: 1;
    min-width: 0;
    border: 0;
    outline: 0;
    background: transparent;
    color: inherit;
    overflow: hidden;
    text-overflow: ellipsis;

    &::placeholder {
      color: var(--xue-text-tertiary);
    }

    &:disabled {
      cursor: not-allowed;
    }
  }

  &__clear {
    flex: none;
    width: 16px;
    height: 16px;
    border: 0;
    border-radius: 50%;
    background: var(--xue-text-disabled);
    color: var(--xue-white);
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    font-size: 12px;
    line-height: 1;
  }
}
</style>
