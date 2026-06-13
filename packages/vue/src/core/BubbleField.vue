<script setup lang="ts">
import { computed } from "vue";
import { makeRng } from "../theme";

const props = withDefaults(defineProps<{ count?: number; seed?: number }>(), {
  count: 16,
  seed: 1,
});

const bubbles = computed(() => {
  const r = makeRng(props.seed);
  return Array.from({ length: props.count }, () => ({
    size: 26 + r() * 110,
    left: r() * 100,
    top: r() * 100,
    delay: -r() * 14,
    duration: 10 + r() * 14,
  }));
});
</script>

<template>
  <div class="aero-bubbles">
    <div
      v-for="(b, i) in bubbles"
      :key="i"
      class="aero-bubble"
      :style="{
        width: `${b.size}px`,
        height: `${b.size}px`,
        left: `${b.left}%`,
        top: `${b.top}%`,
        animationDelay: `${b.delay}s`,
        animationDuration: `${b.duration}s`,
      }"
    />
  </div>
</template>
