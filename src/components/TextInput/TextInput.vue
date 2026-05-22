<script setup lang="ts">
import { computed } from 'vue';

type TextInputState = 'basic' | 'filled' | 'disabled' | 'textarea';
type TextInputSize = 'small' | 'mid';
type TextInputType = 'basic' | 'count';
type TextInputFocus = 'faulse' | 'true';

const props = withDefaults(
  defineProps<{
    modelValue?: string;
    placeholder?: string;
    states?: TextInputState;
    state?: TextInputState;
    size?: TextInputSize;
    type?: TextInputType;
    focus?: TextInputFocus;
    clearable?: boolean;
    maxLength?: number;
  }>(),
  {
    modelValue: '',
    placeholder: '请输入',
    states: undefined,
    state: 'basic',
    size: 'mid',
    type: 'basic',
    focus: 'faulse',
    clearable: true,
    maxLength: 20,
  },
);

const emit = defineEmits<{
  'update:modelValue': [value: string];
  clear: [];
}>();

const stateValue = computed(() => props.states ?? props.state);
const disabled = computed(() => stateValue.value === 'disabled');
const isTextarea = computed(() => props.type === 'count' && stateValue.value === 'textarea');
const isFocused = computed(() => props.focus === 'true');
const hasValue = computed(() => props.modelValue.length > 0);
const showClear = computed(
  () => props.clearable && props.type === 'basic' && stateValue.value === 'filled' && hasValue.value && !disabled.value,
);
const countText = computed(() => `${props.modelValue.length}/${props.maxLength}`);

function updateValue(event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement | HTMLTextAreaElement).value);
}

function clearValue() {
  emit('update:modelValue', '');
  emit('clear');
}
</script>

<template>
  <label
    class="xue-input"
    :class="[
      `xue-input--${props.size}`,
      `xue-input--${stateValue}`,
      `xue-input--${props.type}`,
      { 'xue-input--focused': isFocused, 'xue-input--has-actions': showClear || props.type === 'count' },
    ]"
    data-figma-node="7515:8324"
  >
    <span class="xue-input__field">
      <textarea
        v-if="isTextarea"
        class="xue-input__control xue-input__control--textarea"
        :value="props.modelValue"
        :placeholder="props.placeholder"
        :disabled="disabled"
        :maxlength="props.maxLength"
        @input="updateValue"
      />
      <input
        v-else
        class="xue-input__control"
        :value="props.modelValue"
        :placeholder="props.placeholder"
        :disabled="disabled"
        :maxlength="props.type === 'count' ? props.maxLength : undefined"
        @input="updateValue"
      />
      <button v-if="showClear" class="xue-input__clear" type="button" aria-label="清空输入" @click="clearValue">
        ×
      </button>
      <span v-if="props.type === 'count' && !isTextarea" class="xue-input__count">
        {{ countText }}
      </span>
    </span>
    <span v-if="isTextarea" class="xue-input__textarea-count">
      {{ countText }}
    </span>
  </label>
</template>

<style scoped lang="scss">
.xue-input {
  width: 240px;
  min-width: 120px;
  min-height: var(--xue-control-lg);
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: var(--xue-text-primary);
  font-size: var(--xue-font-size-14);
  line-height: var(--xue-line-height-14);

  &--small {
    min-height: var(--xue-control-sm);
  }

  &--textarea {
    height: 80px;
    align-items: flex-start;

    .xue-input__field {
      flex: 1;
      min-height: 56px;
      align-items: flex-start;
      padding-top: 6px;
      padding-bottom: 6px;
    }
  }

  &--focused,
  &:focus-within {
    .xue-input__field {
      border-color: var(--xue-primary);
    }
  }

  &--disabled {
    .xue-input__field {
      border-color: var(--xue-divider);
      background: var(--xue-surface);
    }

    .xue-input__control {
      color: var(--xue-text-tertiary);
      cursor: not-allowed;
    }
  }

  &--has-actions {
    .xue-input__field {
      padding-right: 8px;
    }
  }

  &__field {
    width: 100%;
    height: var(--xue-control-lg);
    display: inline-flex;
    align-items: center;
    gap: 8px;
    overflow: hidden;
    border: 1px solid var(--xue-border);
    border-radius: var(--xue-radius-6);
    background: var(--xue-white);
    padding: 0 12px;
    transition: border-color 0.16s ease, background-color 0.16s ease;
  }

  &--small &__field {
    height: var(--xue-control-sm);
  }

  &__control {
    flex: 1;
    min-width: 0;
    border: 0;
    outline: 0;
    resize: none;
    background: transparent;
    color: inherit;
    overflow: hidden;
    text-overflow: ellipsis;

    &::placeholder {
      color: var(--xue-text-tertiary);
    }
  }

  &__control--textarea {
    height: 100%;
    line-height: var(--xue-line-height-14);
  }

  &__count {
    flex: none;
    color: var(--xue-text-tertiary);
    font-size: var(--xue-font-size-14);
  }

  &__textarea-count {
    width: 100%;
    color: var(--xue-text-tertiary);
    text-align: right;
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

    &:hover {
      background: var(--xue-text-tertiary);
    }
  }
}
</style>
