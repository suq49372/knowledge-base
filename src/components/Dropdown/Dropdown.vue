<script setup lang="ts">
import XueCheckbox from '../Checkbox/Checkbox.vue';
import XueIcon, { type XueIconName } from '../Icon/Icon.vue';

type DropdownType = 'text' | 'icon' | 'multi-select';
type DropdownSelection = 'single' | 'multi';

export type XueDropdownAction = {
  label: string;
  value: string;
  icon?: XueIconName;
  danger?: boolean;
};

export type XueDropdownOption = {
  label: string;
  value: string;
  checked?: boolean;
};

export type XueDropdownGroup = {
  label: string;
  value: string;
  options: XueDropdownOption[];
};

const props = withDefaults(
  defineProps<{
    type?: DropdownType;
    selection?: DropdownSelection;
    actions?: XueDropdownAction[];
    options?: XueDropdownOption[];
    groups?: XueDropdownGroup[];
  }>(),
  {
    type: 'text',
    selection: 'single',
    actions: () => [
      { label: '下拉操作', value: 'action-1' },
      { label: '下拉操作', value: 'action-2' },
      { label: '下拉操作', value: 'action-3' },
      { label: '警示操作', value: 'danger', danger: true },
    ],
    options: () => [
      { label: '复选框', value: 'option-1' },
      { label: '复选框', value: 'option-2', checked: true },
      { label: '复选框', value: 'option-3' },
    ],
    groups: () => [
      {
        label: '年份',
        value: 'year',
        options: [
          { label: '2027', value: '2027' },
          { label: '2026', value: '2026' },
          { label: '2025', value: '2025' },
          { label: '春季班', value: 'spring' },
          { label: '暑期班', value: 'summer' },
        ],
      },
      {
        label: '课程',
        value: 'course',
        options: [
          { label: '短期班', value: 'short' },
          { label: '活动类', value: 'activity' },
          { label: '诊断类', value: 'diagnosis' },
        ],
      },
      {
        label: '状态',
        value: 'status',
        options: [
          { label: '未开课', value: 'not-started' },
          { label: '已开课', value: 'started' },
          { label: '已结课', value: 'finished' },
        ],
      },
    ],
  },
);

const emit = defineEmits<{
  action: [value: string];
  confirm: [];
  reset: [];
}>();
</script>

<template>
  <div
    class="xue-dropdown"
    :class="[`xue-dropdown--${props.type}`, `xue-dropdown--${props.selection}`]"
    data-figma-node="1502:3975"
  >
    <template v-if="props.type === 'text' || props.type === 'icon'">
      <button
        v-for="action in props.actions"
        :key="action.value"
        class="xue-dropdown__action"
        :class="{ 'is-danger': action.danger }"
        type="button"
        @click="emit('action', action.value)"
      >
        <XueIcon v-if="props.type === 'icon'" :name="action.icon || 'edit'" :size="14" />
        <span>{{ action.label }}</span>
      </button>
    </template>

    <template v-else-if="props.selection === 'single'">
      <div class="xue-dropdown__check-list">
        <XueCheckbox
          v-for="option in props.options"
          :key="option.value"
          type="text"
          :label="option.label"
          :model-value="option.checked"
        />
      </div>
      <footer class="xue-dropdown__footer">
        <button class="xue-dropdown__link is-muted" type="button" @click="emit('reset')">重置</button>
        <button class="xue-dropdown__link" type="button" @click="emit('confirm')">确定</button>
      </footer>
    </template>

    <template v-else>
      <div class="xue-dropdown__groups">
        <section v-for="group in props.groups" :key="group.value" class="xue-dropdown__group">
          <div class="xue-dropdown__group-title">{{ group.label }}</div>
          <button class="xue-dropdown__all" type="button">不限</button>
          <div class="xue-dropdown__group-options">
            <XueCheckbox
              v-for="option in group.options"
              :key="option.value"
              type="text"
              :label="option.label"
              :model-value="option.checked"
            />
          </div>
        </section>
      </div>
      <footer class="xue-dropdown__footer">
        <button class="xue-dropdown__link is-muted" type="button" @click="emit('reset')">重置</button>
        <button class="xue-dropdown__link" type="button" @click="emit('confirm')">确定</button>
      </footer>
    </template>
  </div>
</template>

<style scoped lang="scss">
.xue-dropdown {
  display: inline-flex;
  flex-direction: column;
  gap: var(--xue-padding-2);
  align-items: stretch;
  justify-content: center;
  padding: var(--xue-padding-4);
  border: 1px solid var(--xue-divider);
  border-radius: var(--xue-radius-6);
  background: var(--xue-white);
  box-shadow: var(--xue-shadow-card);
  color: var(--xue-text-primary);
  font-family: var(--xue-font-family);
  font-size: var(--xue-font-size-14);
  line-height: var(--xue-line-height-14);

  &--text {
    width: 84px;
  }

  &--icon {
    width: 107px;
  }

  &--multi-select.xue-dropdown--single {
    width: 110px;
  }

  &--multi-select.xue-dropdown--multi {
    width: 370px;
  }
}

.xue-dropdown__action {
  display: flex;
  height: var(--xue-control-base);
  align-items: center;
  gap: var(--xue-padding-4);
  padding: 0 var(--xue-padding-8);
  border: 0;
  border-radius: var(--xue-radius-4);
  background: transparent;
  color: var(--xue-text-primary);
  font: inherit;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background: var(--xue-hover-mask);
  }

  &.is-danger {
    color: var(--xue-danger);
  }
}

.xue-dropdown__check-list {
  display: flex;
  flex-direction: column;
  gap: var(--xue-padding-2);
}

.xue-dropdown__check-list :deep(.xue-checkbox) {
  height: var(--xue-control-base);
  padding: 0 var(--xue-padding-8);
  border-radius: var(--xue-radius-4);
}

.xue-dropdown__groups {
  display: flex;
  flex-direction: column;
  gap: var(--xue-padding-2);
}

.xue-dropdown__group {
  display: grid;
  grid-template-columns: 28px 36px 1fr;
  column-gap: 16px;
  align-items: start;
  padding: 0 var(--xue-padding-8);
}

.xue-dropdown__group-title {
  display: flex;
  height: var(--xue-control-base);
  align-items: center;
  color: var(--xue-text-primary);
}

.xue-dropdown__all,
.xue-dropdown__link {
  border: 0;
  background: transparent;
  color: var(--xue-primary);
  font: inherit;
  white-space: nowrap;
  cursor: pointer;
}

.xue-dropdown__all {
  height: var(--xue-control-base);
  padding: 0;
  text-align: left;
}

.xue-dropdown__group-options {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0;
}

.xue-dropdown__group-options :deep(.xue-checkbox) {
  height: var(--xue-control-base);
  padding: 0 var(--xue-padding-8);
  border-radius: var(--xue-radius-4);
}

.xue-dropdown__footer {
  display: flex;
  height: var(--xue-control-base);
  align-items: center;
  justify-content: flex-end;
  gap: var(--xue-padding-8);
  padding: 0 var(--xue-padding-8);
}

.xue-dropdown__link {
  font-size: var(--xue-font-size-12);
  line-height: var(--xue-line-height-12);

  &.is-muted {
    color: var(--xue-text-tertiary);
  }
}
</style>
