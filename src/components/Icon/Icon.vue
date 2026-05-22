<script setup lang="ts">
import { computed } from 'vue';

type IconMode = 'stroke' | 'fill';

type IconDefinition = {
  mode?: IconMode;
  viewBox?: string;
  paths?: string[];
  circles?: Array<{ cx: number; cy: number; r: number }>;
  lines?: Array<{ x1: number; y1: number; x2: number; y2: number }>;
  polylines?: string[];
  polygons?: string[];
  rects?: Array<{ x: number; y: number; width: number; height: number; rx?: number }>;
};

const iconMap: Record<string, IconDefinition> = {
  plus: { lines: [{ x1: 12, y1: 5, x2: 12, y2: 19 }, { x1: 5, y1: 12, x2: 19, y2: 12 }] },
  minus: { lines: [{ x1: 5, y1: 12, x2: 19, y2: 12 }] },
  check: { polylines: ['20 6 9 17 4 12'] },
  close: { lines: [{ x1: 18, y1: 6, x2: 6, y2: 18 }, { x1: 6, y1: 6, x2: 18, y2: 18 }] },
  question: { paths: ['M9.1 9a3 3 0 1 1 5.8 1c-.7 1.9-2.9 1.9-2.9 4'], circles: [{ cx: 12, cy: 19, r: 0.8 }] },
  info: { circles: [{ cx: 12, cy: 12, r: 9 }, { cx: 12, cy: 7.8, r: 0.8 }], lines: [{ x1: 12, y1: 11, x2: 12, y2: 17 }] },
  file: { paths: ['M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z', 'M14 3v5h5', 'M8 13h8', 'M8 17h6'] },
  edit: { paths: ['M12 20h9', 'M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z'] },
  image: { rects: [{ x: 4, y: 5, width: 16, height: 14, rx: 2 }], paths: ['M8 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4', 'M20 16l-5-5L5 21'] },
  'picture-add': { rects: [{ x: 4, y: 5, width: 16, height: 14, rx: 2 }], paths: ['M8 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4', 'M20 16l-4-4-7 7', 'M17 6v6', 'M14 9h6'] },
  qrcode: { paths: ['M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4z', 'M14 14h2v2h-2zM18 14h2v6h-4v-2h2zM14 18h2v2h-2z'] },
  wifi: { paths: ['M5 9.5a11 11 0 0 1 14 0', 'M8.5 13a6 6 0 0 1 7 0', 'M12 17h.01'] },
  filter: { paths: ['M4 5h16l-6 7v5l-4 2v-7z'] },
  safe: { paths: ['M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z', 'M9 12l2 2 4-4'] },
  link: { paths: ['M10 13a5 5 0 0 0 7.5.5l2-2A5 5 0 0 0 12.5 4L11 5.5', 'M14 11a5 5 0 0 0-7.5-.5l-2 2A5 5 0 0 0 11.5 20L13 18.5'] },
  unlink: { paths: ['M15 7h1a5 5 0 0 1 0 10h-1', 'M9 17H8A5 5 0 0 1 8 7h1', 'M8 12h8', 'M4 4l16 16'] },
  location: { paths: ['M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11z'], circles: [{ cx: 12, cy: 10, r: 2.5 }] },
  calendar: { rects: [{ x: 4, y: 5, width: 16, height: 15, rx: 2 }], lines: [{ x1: 8, y1: 3, x2: 8, y2: 7 }, { x1: 16, y1: 3, x2: 16, y2: 7 }, { x1: 4, y1: 10, x2: 20, y2: 10 }] },
  time: { circles: [{ cx: 12, cy: 12, r: 9 }], paths: ['M12 7v5l3 2'] },
  notice: { paths: ['M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9', 'M10 21h4'] },
  users: { paths: ['M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2', 'M9.5 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8', 'M22 21v-2a4 4 0 0 0-3-3.8', 'M16 3.2a4 4 0 0 1 0 7.6'] },
  'user-plus': { paths: ['M15 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', 'M8.5 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8', 'M19 8v6', 'M16 11h6'] },
  down: { polylines: ['6 9 12 15 18 9'] },
  up: { polylines: ['18 15 12 9 6 15'] },
  right: { polylines: ['9 18 15 12 9 6'] },
  left: { polylines: ['15 18 9 12 15 6'] },
  'chevron-left': { polylines: ['17 18 9 12 17 6'] },
  'chevron-right': { polylines: ['7 18 15 12 7 6'] },
  'menu-fold': { paths: ['M4 6h16M4 12h11M4 18h16', 'M18 10l-2 2 2 2'] },
  'menu-unfold': { paths: ['M4 6h16M9 12h11M4 18h16', 'M6 10l2 2-2 2'] },
  swap: { paths: ['M7 7h11l-3-3', 'M17 17H6l3 3'] },
  drag: { circles: [{ cx: 9, cy: 6, r: 1 }, { cx: 15, cy: 6, r: 1 }, { cx: 9, cy: 12, r: 1 }, { cx: 15, cy: 12, r: 1 }, { cx: 9, cy: 18, r: 1 }, { cx: 15, cy: 18, r: 1 }] },
  undo: { paths: ['M9 7H4v5', 'M4 12a8 8 0 1 0 2.3-5.7'] },
  redo: { paths: ['M15 7h5v5', 'M20 12a8 8 0 1 1-2.3-5.7'] },
  crop: { paths: ['M6 2v14a2 2 0 0 0 2 2h14', 'M2 6h14a2 2 0 0 1 2 2v14'] },
  pen: { paths: ['M3 21l3-1 12-12a2.1 2.1 0 0 0-3-3L3 17z', 'M14 6l4 4'] },
  'zoom-in': { circles: [{ cx: 11, cy: 11, r: 7 }], paths: ['M21 21l-4.3-4.3', 'M11 8v6', 'M8 11h6'] },
  'zoom-out': { circles: [{ cx: 11, cy: 11, r: 7 }], paths: ['M21 21l-4.3-4.3', 'M8 11h6'] },
  copy: { rects: [{ x: 8, y: 8, width: 12, height: 12, rx: 2 }], paths: ['M4 16V6a2 2 0 0 1 2-2h10'] },
  delete: { paths: ['M3 6h18', 'M8 6V4h8v2', 'M19 6l-1 14H6L5 6', 'M10 11v5', 'M14 11v5'] },
  search: { circles: [{ cx: 11, cy: 11, r: 7 }], paths: ['M21 21l-4.3-4.3'] },
  download: { paths: ['M12 3v12', 'M7 10l5 5 5-5', 'M5 21h14'] },
  upload: { paths: ['M12 21V9', 'M7 14l5-5 5 5', 'M5 3h14'] },
  more: { circles: [{ cx: 5, cy: 12, r: 1 }, { cx: 12, cy: 12, r: 1 }, { cx: 19, cy: 12, r: 1 }] },
  microphone: { paths: ['M12 14a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v5a3 3 0 0 0 3 3z', 'M5 11a7 7 0 0 0 14 0', 'M12 18v4'] },
  eye: { paths: ['M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z'], circles: [{ cx: 12, cy: 12, r: 3 }] },
  'eye-invisible': { paths: ['M2 12s3.5-6 10-6c2 0 3.7.5 5.1 1.3', 'M22 12s-3.5 6-10 6c-2 0-3.7-.5-5.1-1.3', 'M4 4l16 16'] },
  home: { paths: ['M3 11l9-8 9 8', 'M5 10v10h14V10', 'M9 20v-6h6v6'] },
  settings: { paths: ['M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z', 'M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2 3-.2-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21h-5v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.2.1-2-3 .1-.1A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.5-1H3v-4h.2a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1 2-3 .2.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.5V3h5v.2a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.2-.1 2 3-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1h.2v4h-.2a1.7 1.7 0 0 0-1.5 1z'] },
  cloud: { paths: ['M18 18a4 4 0 0 0 0-8h-1.2A6 6 0 0 0 5 12.5 3.5 3.5 0 0 0 6.5 19H18z'] },
  service: { paths: ['M4 13a8 8 0 0 1 16 0', 'M4 13v4a2 2 0 0 0 2 2h2v-6H4z', 'M20 13v4a2 2 0 0 1-2 2h-2v-6h4z'] },
  star: { polygons: ['12 3 14.8 8.7 21 9.6 16.5 14 17.6 20 12 17 6.4 20 7.5 14 3 9.6 9.2 8.7'] },
  like: { paths: ['M7 10v11H3V10z', 'M7 10l4-7 1.5 1.5L12 9h7a2 2 0 0 1 2 2l-2 8a2 2 0 0 1-2 2H7'] },
  dislike: { paths: ['M17 14V3h4v11z', 'M17 14l-4 7-1.5-1.5L12 15H5a2 2 0 0 1-2-2l2-8a2 2 0 0 1 2-2h10'] },
  reply: { paths: ['M9 10H4l6-6v5h4a7 7 0 0 1 7 7v2a9 9 0 0 0-8-5H9z'] },
  refresh: { paths: ['M20 6v6h-6', 'M4 18v-6h6', 'M19 12a7 7 0 0 0-12-5', 'M5 12a7 7 0 0 0 12 5'] },
  list: { paths: ['M8 6h13M8 12h13M8 18h13', 'M3 6h.01M3 12h.01M3 18h.01'] },
  play: { mode: 'fill', paths: ['M8 5v14l11-7z'] },
  pause: { mode: 'fill', paths: ['M7 5h4v14H7zM13 5h4v14h-4z'] },
  volume: { paths: ['M4 9v6h4l5 4V5L8 9z', 'M16 9a5 5 0 0 1 0 6'] },
  paper: { paths: ['M7 3h8l4 4v14H7z', 'M15 3v5h4', 'M10 12h6', 'M10 16h6'] },
  courseware: { paths: ['M4 5h16v12H4z', 'M8 21h8', 'M12 17v4', 'M8 9h8', 'M8 13h5'] },
  outline: { paths: ['M5 4h14v16H5z', 'M8 8h8', 'M8 12h8', 'M8 16h5'] },
  'merged-tutoring': {
    paths: ['M4 7a3 3 0 0 1 3-3h4v13H7a3 3 0 0 0-3 3z', 'M20 7a3 3 0 0 0-3-3h-4v13h4a3 3 0 0 1 3 3z', 'M9 8h2', 'M13 8h2'],
  },
  concentrate: { paths: ['M12 3l7 4v5c0 4-2.8 7-7 9-4.2-2-7-5-7-9V7z', 'M9 12l2 2 4-4'] },
  'circle-plus-fill': { mode: 'fill', paths: ['M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 5v4h4v2h-4v4h-2v-4H7v-2h4V7z'] },
  'circle-close-fill': { mode: 'fill', paths: ['M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM8 7l4 4 4-4 1 1-4 4 4 4-1 1-4-4-4 4-1-1 4-4-4-4z'] },
  'circle-check-fill': { mode: 'fill', paths: ['M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1.2 13.2L7 11.5l1.4-1.4 2.4 2.4 5-5 1.4 1.4z'] },
  'circle-info-fill': { mode: 'fill', paths: ['M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1 8h2v7h-2zm0-4h2v2h-2z'] },
  'circle-time-fill': { mode: 'fill', paths: ['M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 5v4.4l3 1.8-1 1.6-4-2.4V7z'] },
  'time-circle-fill': { mode: 'fill', paths: ['M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 5v4.4l3 1.8-1 1.6-4-2.4V7z'] },
  'grid-fill': { mode: 'fill', paths: ['M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z'] },
  'folder-fill': { mode: 'fill', paths: ['M3 6a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'] },
  'book-fill': { mode: 'fill', paths: ['M5 4a3 3 0 0 1 3-3h11v18H8a3 3 0 0 0-3 3zM5 22a3 3 0 0 1 3-3h11'] },
  'file-fill': { mode: 'fill', paths: ['M6 2h8l5 5v15H6zM14 2v6h5'] },
  'flag-fill': { mode: 'fill', paths: ['M6 3h11l-1.5 4L17 11H8v10H6z'] },
  'rank-fill': { mode: 'fill', paths: ['M5 12h4v9H5zM10 7h4v14h-4zM15 3h4v18h-4z'] },
  'bulb-fill': { mode: 'fill', paths: ['M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2zM9 19h6v2H9z'] },
  'thumb-up-hexagon-fill': { mode: 'fill', paths: ['M12 2l8 5v10l-8 5-8-5V7zM9 11v6H7v-6zm2 0l2-4 1.2 1.2L14 11h3l-1 6h-5z'] },
  'book': { paths: ['M5 4a3 3 0 0 1 3-3h11v18H8a3 3 0 0 0-3 3zM5 22a3 3 0 0 1 3-3h11'] },
  'folder': { paths: ['M3 6a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'] },
  'icon/paper': { paths: ['M7 3h8l4 4v14H7z', 'M15 3v5h4', 'M10 12h6', 'M10 16h6'] },
  'icon/courseware': { paths: ['M4 5h16v12H4z', 'M8 21h8', 'M12 17v4', 'M8 9h8', 'M8 13h5'] },
  'icon/book': { paths: ['M5 4a3 3 0 0 1 3-3h11v18H8a3 3 0 0 0-3 3zM5 22a3 3 0 0 1 3-3h11'] },
  'icon/folder': { paths: ['M3 6a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'] },
  'icon/outline': { paths: ['M5 4h14v16H5z', 'M8 8h8', 'M8 12h8', 'M8 16h5'] },
  'icon/file-fill': { mode: 'fill', paths: ['M6 2h8l5 5v15H6zM14 2v6h5'] },
  'icon/flag-fill': { mode: 'fill', paths: ['M6 3h11l-1.5 4L17 11H8v10H6z'] },
  'icon/rank-fill': { mode: 'fill', paths: ['M5 12h4v9H5zM10 7h4v14h-4zM15 3h4v18h-4z'] },
  'icon/bulb-fill': { mode: 'fill', paths: ['M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2zM9 19h6v2H9z'] },
  'icon/merged-tutoring': {
    paths: ['M4 7a3 3 0 0 1 3-3h4v13H7a3 3 0 0 0-3 3z', 'M20 7a3 3 0 0 0-3-3h-4v13h4a3 3 0 0 1 3 3z', 'M9 8h2', 'M13 8h2'],
  },
  'icon/time-circle-fill': { mode: 'fill', paths: ['M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 5v4.4l3 1.8-1 1.6-4-2.4V7z'] },
  'icon/thumb-up-hexagon-fill': { mode: 'fill', paths: ['M12 2l8 5v10l-8 5-8-5V7zM9 11v6H7v-6zm2 0l2-4 1.2 1.2L14 11h3l-1 6h-5z'] },
  'merged-icon/concentrate': { paths: ['M12 3l7 4v5c0 4-2.8 7-7 9-4.2-2-7-5-7-9V7z', 'M9 12l2 2 4-4'] },
};

export type XueIconName = keyof typeof iconMap;

const props = withDefaults(
  defineProps<{
    name?: XueIconName;
    size?: number | string;
    color?: string;
    strokeWidth?: number;
    title?: string;
  }>(),
  {
    name: 'grid-fill',
    size: 20,
    color: 'currentColor',
    strokeWidth: 2,
    title: undefined,
  },
);

const icon = computed(() => iconMap[props.name] || iconMap['grid-fill']);
const sizeValue = computed(() => (typeof props.size === 'number' ? `${props.size}px` : props.size));
const isFill = computed(() => icon.value.mode === 'fill');
</script>

<template>
  <svg
    class="xue-icon"
    :width="sizeValue"
    :height="sizeValue"
    :viewBox="icon.viewBox || '0 0 24 24'"
    :aria-hidden="props.title ? undefined : 'true'"
    :role="props.title ? 'img' : undefined"
    :style="{ color: props.color }"
    data-figma-node="11911:46923"
  >
    <title v-if="props.title">{{ props.title }}</title>
    <g
      v-if="isFill"
      fill="currentColor"
      stroke="none"
    >
      <path v-for="path in icon.paths" :key="path" :d="path" />
    </g>
    <g
      v-else
      fill="none"
      stroke="currentColor"
      :stroke-width="props.strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path v-for="path in icon.paths" :key="path" :d="path" />
      <circle v-for="circle in icon.circles" :key="`${circle.cx}-${circle.cy}-${circle.r}`" :cx="circle.cx" :cy="circle.cy" :r="circle.r" />
      <line v-for="line in icon.lines" :key="`${line.x1}-${line.y1}-${line.x2}-${line.y2}`" :x1="line.x1" :y1="line.y1" :x2="line.x2" :y2="line.y2" />
      <polyline v-for="polyline in icon.polylines" :key="polyline" :points="polyline" />
      <polygon v-for="polygon in icon.polygons" :key="polygon" :points="polygon" />
      <rect v-for="rect in icon.rects" :key="`${rect.x}-${rect.y}-${rect.width}-${rect.height}`" :x="rect.x" :y="rect.y" :width="rect.width" :height="rect.height" :rx="rect.rx || 0" />
    </g>
  </svg>
</template>

<style scoped lang="scss">
.xue-icon {
  display: inline-block;
  flex: 0 0 auto;
  vertical-align: middle;
}
</style>
