<script setup lang="ts">
import defaultAvatarImage from '../../assets/avatar/image.png';

type AvatarShape = 'circle' | 'square';
type AvatarType = 'icon' | 'image' | 'text';

const props = withDefaults(
  defineProps<{
    shape?: AvatarShape;
    type?: AvatarType;
    size?: number;
    text?: string;
    imageSrc?: string;
    ariaLabel?: string;
  }>(),
  {
    shape: 'circle',
    type: 'icon',
    size: 48,
    text: 'A',
    imageSrc: defaultAvatarImage,
    ariaLabel: undefined,
  },
);
</script>

<template>
  <span
    class="xue-avatar"
    :class="[`xue-avatar--${props.shape}`, `xue-avatar--${props.type}`]"
    :style="{ width: `${props.size}px`, height: `${props.size}px`, fontSize: `${props.size * 0.66}px` }"
    :aria-label="props.ariaLabel"
    :aria-hidden="props.ariaLabel ? undefined : 'true'"
    data-figma-node="11563:6072"
  >
    <img v-if="props.type === 'image'" class="xue-avatar__image" :src="props.imageSrc" alt="" />
    <span v-else-if="props.type === 'text'" class="xue-avatar__text">{{ props.text }}</span>
    <span v-else class="xue-avatar__icon" aria-hidden="true">
      <span class="xue-avatar__head" />
      <span class="xue-avatar__body" />
    </span>
  </span>
</template>

<style scoped lang="scss">
.xue-avatar {
  position: relative;
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #cbd0d6;
  color: var(--xue-white);
  font-family: var(--xue-font-family);
  vertical-align: middle;

  &--circle {
    border-radius: 50%;
  }

  &--square {
    border-radius: var(--xue-radius-6);
  }

  &--text {
    background: var(--xue-primary);
  }
}

.xue-avatar__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.xue-avatar__text {
  font-size: inherit;
  line-height: 1;
}

.xue-avatar__icon {
  position: absolute;
  inset: 0;
  border: 1px solid rgb(203 208 214 / 30%);
  border-radius: inherit;
}

.xue-avatar__head,
.xue-avatar__body {
  position: absolute;
  left: 50%;
  display: block;
  background: var(--xue-white);
  transform: translateX(-50%);
}

.xue-avatar__head {
  top: 26.5%;
  width: 33.3%;
  height: 33.3%;
  border-radius: 50%;
}

.xue-avatar__body {
  top: 69.5%;
  width: 83.3%;
  height: 42%;
  border-radius: 50% 50% 0 0;
}
</style>
