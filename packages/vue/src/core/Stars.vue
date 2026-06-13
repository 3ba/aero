<script setup lang="ts">
import { computed } from "vue";
import { makeRng } from "../theme";

const props = withDefaults(defineProps<{ count?: number; seed?: number }>(), {
  count: 40,
  seed: 7,
});

const stars = computed(() => {
  const r = makeRng(props.seed);
  return Array.from({ length: props.count }, () => ({
    left: r() * 100,
    top: r() * 60,
    size: 1 + r() * 2.4,
    delay: -r() * 3.5,
  }));
});
</script>

<template>
  <div class="aero-stars">
    <div
      v-for="(s, i) in stars"
      :key="i"
      class="aero-star"
      :style="{
        left: `${s.left}%`,
        top: `${s.top}%`,
        width: `${s.size}px`,
        height: `${s.size}px`,
        animationDelay: `${s.delay}s`,
      }"
    />
  </div>
</template>
