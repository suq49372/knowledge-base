<script setup lang="ts">
import dataImage from '../../assets/empty-state/data.png';
import notFoundImage from '../../assets/empty-state/not-found.png';
import packageImage from '../../assets/empty-state/package.png';
import permissionImage from '../../assets/empty-state/permission.png';

type EmptyVariant = 'data' | 'permission' | '404' | 'package';

const props = withDefaults(
  defineProps<{
    emptyVariant?: EmptyVariant;
  }>(),
  {
    emptyVariant: 'data',
  },
);

const images: Record<EmptyVariant, string> = {
  data: dataImage,
  permission: permissionImage,
  '404': notFoundImage,
  package: packageImage,
};
</script>

<template>
  <span
    class="xue-empty-state-icon"
    :class="`xue-empty-state-icon--${props.emptyVariant}`"
    data-figma-node="6955:7348"
    aria-hidden="true"
  >
    <img class="xue-empty-state-icon__image" :src="images[props.emptyVariant]" alt="" />
  </span>
</template>

<style scoped lang="scss">
.xue-empty-state-icon {
  display: inline-flex;
  width: 100px;
  height: 100px;
  align-items: center;
  justify-content: center;
  vertical-align: middle;

  &--package {
    width: 48px;
    height: 48px;
  }
}

.xue-empty-state-icon__image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  pointer-events: none;
}
</style>
