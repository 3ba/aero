<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(defineProps<{ points?: number[]; w?: number; h?: number }>(), {
  points: () => [4, 7, 5, 9, 6, 11, 8, 13, 10, 14],
  w: 120,
  h: 36,
});

const line = computed(() => {
  const { points, w, h } = props;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const px = (i: number) => (i / (points.length - 1)) * w;
  const py = (v: number) => h - ((v - min) / (max - min || 1)) * (h - 4) - 2;
  return points.map((v, i) => `${i === 0 ? "M" : "L"}${px(i).toFixed(1)},${py(v).toFixed(1)}`).join(" ");
});
const area = computed(() => `${line.value} L${props.w},${props.h} L0,${props.h} Z`);
</script>

<template>
  <svg :width="w" :height="h" :style="{ display: 'block', overflow: 'visible' }">
    <defs>
      <linearGradient id="aero-spark-fill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="var(--t-accent-2)" stop-opacity="0.5" />
        <stop offset="100%" stop-color="var(--t-accent-2)" stop-opacity="0" />
      </linearGradient>
    </defs>
    <path :d="area" fill="url(#aero-spark-fill)" />
    <path
      :d="line"
      fill="none"
      stroke="var(--t-accent-2)"
      stroke-width="2.5"
      stroke-linecap="round"
      :style="{ filter: 'drop-shadow(0 0 5px var(--t-glow))' }"
    />
  </svg>
</template>
