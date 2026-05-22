<script setup lang="ts">
import { computed } from 'vue';

type SelectFieldMode = 'radio' | 'multi';
type SelectFieldState = 'default' | 'focused' | 'filled' | 'disabled';
type SelectFieldFocus = 'faulse' | 'true' | 'error';

const props = withDefaults(
  defineProps<{
    mode?: SelectFieldMode;
    state?: SelectFieldState;
    focus?: SelectFieldFocus;
    placeholder?: string;
    value?: string;
    tags?: string[];
    clearable?: boolean;
  }>(),
  {
    mode: 'radio',
    state: 'default',
    focus: 'faulse',
    placeholder: '请选择',
    value: '已选择',
    tags: () => ['选项1', '选项2'],
    clearable: true,
  },
);

const emit = defineEmits<{
  clear: [];
  removeTag: [tag: string];
}>();

const disabled = computed(() => props.state === 'disabled');
const filled = computed(() => props.state === 'filled');
const error = computed(() => props.focus === 'error');
const opened = computed(() => props.focus === 'true' || props.state === 'focused');
const showClear = computed(() => props.clearable && props.mode === 'radio' && filled.value && props.focus === 'true' && !disabled.value);
</script>

<template>
  <div
    class="xue-select-field"
    :class="[
      `xue-select-field--${props.mode}`,
      `xue-select-field--${props.state}`,
      `xue-select-field--focus-${props.focus}`,
      { 'xue-select-field--opened': opened, 'xue-select-field--error': error },
    ]"
    data-figma-node="7515:8328"
    role="combobox"
    :aria-expanded="opened"
    :aria-disabled="disabled"
  >
    <div v-if="props.mode === 'multi' && filled" class="xue-select-field__tags">
      <span v-for="tag in props.tags" :key="tag" class="xue-select-field__tag">
        {{ tag }}
        <button type="button" aria-label="移除选项" :disabled="disabled" @click="emit('removeTag', tag)">×</button>
      </span>
    </div>
    <span v-else class="xue-select-field__text" :class="{ 'xue-select-field__text--placeholder': !filled }">
      {{ filled ? props.value : props.placeholder }}
    </span>
    <button v-if="showClear" class="xue-select-field__clear" type="button" aria-label="清空选择" @click="emit('clear')">
      ×
    </button>
    <span v-else class="xue-select-field__arrow" aria-hidden="true"></span>
  </div>
</template>

<style scoped lang="scss">
.xue-select-field {
  width: 240px;
  min-width: 120px;
  height: var(--xue-control-lg);
  display: inline-flex;
  align-items: center;
  overflow: hidden;
  border: 1px solid var(--xue-border);
  border-radius: var(--xue-radius-6);
  background: var(--xue-white);
  padding-left: 12px;
  color: var(--xue-text-primary);
  font-size: var(--xue-font-size-14);
  line-height: var(--xue-line-height-14);
  transition: border-color 0.16s ease, background-color 0.16s ease;

  &--focused,
  &--focus-true,
  &--opened {
    border-color: var(--xue-primary);
  }

  &--error {
    border-color: var(--xue-danger);
  }

  &--disabled {
    border-color: var(--xue-divider);
    background: var(--xue-surface);
    color: var(--xue-text-tertiary);
  }

  &--multi {
    padding-left: 4px;
  }

  &__text {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &--placeholder {
      color: var(--xue-text-tertiary);
    }
  }

  &__tags {
    flex: 1;
    min-width: 0;
    display: flex;
    align-items: center;
    gap: 4px;
    overflow: hidden;
  }

  &__tag {
    height: 24px;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    border-radius: var(--xue-radius-4);
    background: var(--xue-divider);
    padding: 0 6px 0 10px;
    color: var(--xue-text-primary);
    font-size: var(--xue-font-size-12);
    line-height: var(--xue-line-height-12);

    button {
      width: 14px;
      height: 14px;
      border: 0;
      background: transparent;
      color: var(--xue-text-secondary);
      padding: 0;
      cursor: pointer;
      line-height: 1;
    }
  }

  &__arrow,
  &__clear {
    width: 40px;
    height: 32px;
    flex: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  &__arrow::before {
    content: "";
    width: 7px;
    height: 7px;
    border-right: 1.5px solid var(--xue-text-secondary);
    border-bottom: 1.5px solid var(--xue-text-secondary);
    transform: translateY(-2px) rotate(45deg);
  }

  &--opened &__arrow::before {
    transform: translateY(2px) rotate(225deg);
  }

  &--disabled &__arrow::before {
    opacity: 0.35;
  }

  &__clear {
    border: 0;
    background: transparent;
    cursor: pointer;
    color: var(--xue-white);

    &::before {
      content: "×";
      width: 16px;
      height: 16px;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: var(--xue-text-disabled);
      font-size: 12px;
      line-height: 1;
    }
  }
}
</style>
