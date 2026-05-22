<script setup lang="ts">
import { computed } from 'vue';
import XueIcon from '../Icon/Icon.vue';

type DateTimeInputType = 'date' | 'time' | 'datetime' | 'date-range' | 'time-range' | 'datetime-range';
type DateTimeInputState = 'placeholder' | 'clearable' | 'disabled';

const props = withDefaults(
  defineProps<{
    type?: DateTimeInputType;
    state?: DateTimeInputState;
    value?: string;
    startValue?: string;
    endValue?: string;
    clearable?: boolean;
  }>(),
  {
    type: 'date',
    state: 'placeholder',
    value: undefined,
    startValue: undefined,
    endValue: undefined,
    clearable: true,
  },
);

const emit = defineEmits<{
  clear: [];
  click: [];
}>();

const isRange = computed(() => props.type.endsWith('-range'));
const isTime = computed(() => props.type === 'time' || props.type === 'time-range');
const disabled = computed(() => props.state === 'disabled');
const filled = computed(() => props.state === 'clearable');
const iconName = computed(() => (isTime.value ? 'time' : 'calendar'));

const placeholderMap: Record<DateTimeInputType, string> = {
  date: '请选择日期',
  time: '请选择时间',
  datetime: '请选择日期时间',
  'date-range': '开始日期',
  'time-range': '开始时间',
  'datetime-range': '开始日期时间',
};

const endPlaceholderMap: Record<DateTimeInputType, string> = {
  date: '',
  time: '',
  datetime: '',
  'date-range': '结束日期',
  'time-range': '结束时间',
  'datetime-range': '结束日期时间',
};

const valueMap: Record<DateTimeInputType, string> = {
  date: '2025-09-11',
  time: '12:00:00',
  datetime: '2025-09-11 12:00:00',
  'date-range': '2025-09-11',
  'time-range': '12:00:00',
  'datetime-range': '2025-09-11 12:00:00',
};

const endValueMap: Record<DateTimeInputType, string> = {
  date: '',
  time: '',
  datetime: '',
  'date-range': '2025-09-12',
  'time-range': '12:00:00',
  'datetime-range': '2025-09-12 12:00:00',
};

const displayValue = computed(() => {
  if (filled.value) return props.value ?? valueMap[props.type];
  return placeholderMap[props.type];
});

const displayStartValue = computed(() => {
  if (filled.value) return props.startValue ?? valueMap[props.type];
  return placeholderMap[props.type];
});

const displayEndValue = computed(() => {
  if (filled.value) return props.endValue ?? endValueMap[props.type];
  return endPlaceholderMap[props.type];
});

const showClear = computed(() => props.clearable && filled.value && !disabled.value);

const clearValue = (event: MouseEvent) => {
  event.stopPropagation();
  emit('clear');
};
</script>

<template>
  <button
    class="xue-date-time-input"
    :class="[
      `xue-date-time-input--${props.type}`,
      `xue-date-time-input--${props.state}`,
      {
        'xue-date-time-input--range': isRange,
        'is-filled': filled,
        'is-disabled': disabled,
      },
    ]"
    type="button"
    :disabled="disabled"
    data-figma-node="7515:8340"
    @click="emit('click')"
  >
    <span class="xue-date-time-input__leading" aria-hidden="true">
      <XueIcon :name="iconName" :size="16" :stroke-width="1.8" />
    </span>

    <template v-if="isRange">
      <span class="xue-date-time-input__range-value">{{ displayStartValue }}</span>
      <span class="xue-date-time-input__separator">-</span>
      <span class="xue-date-time-input__range-value">{{ displayEndValue }}</span>
    </template>

    <span v-else class="xue-date-time-input__value">{{ displayValue }}</span>

    <span v-if="showClear" class="xue-date-time-input__clear-wrap">
      <button class="xue-date-time-input__clear" type="button" aria-label="清空日期时间" @click="clearValue">
        <XueIcon name="circle-close-fill" :size="16" />
      </button>
    </span>
  </button>
</template>

<style scoped lang="scss">
.xue-date-time-input {
  display: inline-flex;
  width: 240px;
  min-width: 120px;
  height: var(--xue-control-base);
  align-items: center;
  overflow: hidden;
  border: var(--xue-stroke-divider) solid var(--xue-border);
  border-radius: var(--xue-radius-6);
  background: var(--xue-white);
  padding: 0 var(--xue-padding-12) 0 0;
  color: var(--xue-text-tertiary);
  font-family: var(--xue-font-family);
  font-size: var(--xue-font-size-14);
  line-height: var(--xue-line-height-14);
  text-align: left;
  cursor: pointer;

  &--date-range,
  &--time-range {
    width: 290px;
    min-width: 240px;
  }

  &--datetime-range {
    width: 410px;
    min-width: 410px;
  }

  &.is-filled {
    color: var(--xue-text-primary);
  }

  &.is-disabled {
    border-color: var(--xue-divider);
    background: var(--xue-surface);
    color: var(--xue-text-tertiary);
    cursor: not-allowed;
  }
}

.xue-date-time-input__leading {
  display: inline-flex;
  width: 36px;
  height: var(--xue-control-base);
  flex: none;
  align-items: center;
  justify-content: center;
  padding-left: var(--xue-padding-12);
  padding-right: var(--xue-padding-8);
  color: var(--xue-text-secondary);
}

.xue-date-time-input.is-disabled .xue-date-time-input__leading {
  color: var(--xue-text-disabled);
}

.xue-date-time-input__value,
.xue-date-time-input__range-value {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.xue-date-time-input__value {
  flex: 1;
}

.xue-date-time-input__range-value {
  flex: 1;
}

.xue-date-time-input__separator {
  flex: none;
  padding: 0 var(--xue-padding-8);
  color: var(--xue-text-tertiary);
}

.xue-date-time-input.is-disabled .xue-date-time-input__separator {
  color: var(--xue-text-disabled);
}

.xue-date-time-input__clear-wrap {
  display: inline-flex;
  height: var(--xue-control-base);
  flex: none;
  align-items: center;
  padding-left: var(--xue-padding-8);
  margin-right: calc(var(--xue-padding-12) * -1);
  padding-right: var(--xue-padding-12);
  background: var(--xue-white);
}

.xue-date-time-input__clear {
  display: inline-flex;
  width: 16px;
  height: 16px;
  align-items: center;
  justify-content: center;
  border: 0;
  padding: 0;
  background: transparent;
  color: var(--xue-text-disabled);
  cursor: pointer;

  &:hover {
    color: var(--xue-text-tertiary);
  }
}
</style>
