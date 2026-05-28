<script setup lang="ts">
import logoImage from '../../assets/logo/teacher-platform-logo.png';

const props = withDefaults(
  defineProps<{
    width?: number;
    alt?: string;
  }>(),
  {
    width: 94,
    alt: '老师平台',
  },
);
</script>

<template>
  <span
    class="xue-logo"
    :style="{ width: `${props.width}px` }"
    data-figma-node="12231:10842"
  >
    <img class="xue-logo__image" :src="logoImage" :alt="props.alt" />
  </span>
</template>

<style scoped lang="scss">
.xue-logo {
  display: inline-flex;
  aspect-ratio: 468 / 134;
  align-items: center;
  justify-content: center;
  line-height: 0;
  vertical-align: middle;
}

.xue-logo__image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  pointer-events: none;
}
</style>
