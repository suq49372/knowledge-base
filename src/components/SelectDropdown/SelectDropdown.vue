<script setup lang="ts">
type SelectDropdownType = 'single' | 'multiple';
type SelectDropdownState = 'hover' | 'selected' | 'scroll' | 'empty';

const props = withDefaults(
  defineProps<{
    type?: SelectDropdownType;
    state?: SelectDropdownState;
    options?: string[];
    selected?: string[];
    scrollbar?: boolean;
  }>(),
  {
    type: 'single',
    state: 'hover',
    options: () => ['选项', '选项', '选项', '选项'],
    selected: () => ['选项'],
    scrollbar: true,
  },
);

const emit = defineEmits<{
  select: [option: string];
}>();

function optionState(option: string, index: number) {
  if (props.state === 'hover' && index === (props.type === 'multiple' ? 1 : 0)) {
    return 'hover';
  }

  if (props.state === 'selected' || props.state === 'scroll') {
    if (props.type === 'multiple') {
      return index === 0 || index === 1 || (props.state === 'scroll' && (index === 4 || index === 5)) ? 'selected' : 'basic';
    }

    return index === 0 ? 'selected' : 'basic';
  }

  return 'basic';
}
</script>

<template>
  <div
    class="xue-select-dropdown"
    :class="[`xue-select-dropdown--${props.type}`, `xue-select-dropdown--${props.state}`]"
    data-figma-node="1473:2053"
  >
    <p v-if="props.state === 'empty'" class="xue-select-dropdown__empty">暂无数据</p>
    <template v-else>
      <div class="xue-select-dropdown__list">
        <button
          v-for="(option, index) in props.options"
          :key="`${option}-${index}`"
          class="xue-select-dropdown__item"
          :class="`xue-select-dropdown__item--${optionState(option, index)}`"
          type="button"
          @click="emit('select', option)"
        >
          <span>{{ option }}</span>
          <span v-if="props.type === 'multiple' && optionState(option, index) === 'selected'" class="xue-select-dropdown__check">
            ✓
          </span>
          <span v-if="props.type === 'single' && optionState(option, index) === 'selected'" class="xue-select-dropdown__check">
            ✓
          </span>
        </button>
      </div>
      <div v-if="props.scrollbar" class="xue-select-dropdown__scrollbar" aria-hidden="true">
        <span></span>
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
.xue-select-dropdown {
  width: 240px;
  min-height: 142px;
  display: flex;
  position: relative;
  overflow: hidden;
  border: 1px solid var(--xue-divider);
  border-radius: var(--xue-radius-6);
  background: var(--xue-white);
  box-shadow: var(--xue-shadow-card);

  &--empty {
    align-items: center;
    justify-content: center;
  }

  &--scroll {
    height: 346px;
  }

  &__empty {
    margin: 0;
    color: var(--xue-text-tertiary);
    font-size: var(--xue-font-size-14);
    line-height: var(--xue-line-height-14);
  }

  &__list {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 4px;
    overflow: hidden;
  }

  &__item {
    width: 100%;
    height: 32px;
    display: flex;
    align-items: center;
    gap: 8px;
    border: 0;
    border-radius: var(--xue-radius-4);
    background: transparent;
    padding: 0 8px;
    color: var(--xue-text-primary);
    cursor: pointer;
    font-size: var(--xue-font-size-14);
    line-height: var(--xue-line-height-14);
    text-align: left;

    span:first-child {
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    &--hover {
      background: var(--xue-hover-mask);
    }

    &--selected {
      color: var(--xue-primary);
    }
  }

  &__check {
    flex: none;
    color: var(--xue-primary);
  }

  &__scrollbar {
    width: 10px;
    flex: none;
    display: flex;
    justify-content: center;
    padding: 40px 2px;

    span {
      width: 6px;
      height: 100%;
      border-radius: 999px;
      background: rgb(0 0 0 / 20%);
    }
  }
}
</style>
