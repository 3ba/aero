<script setup lang="ts">
import { computed } from "vue";
import { useAeroTheme } from "../context";
import type { AeroTheme } from "../theme";
import Celestial from "./Celestial.vue";
import Stars from "./Stars.vue";
import BubbleField from "./BubbleField.vue";

const props = withDefaults(
  defineProps<{
    theme?: AeroTheme;
    bubbles?: boolean;
    bubbleCount?: number;
    seed?: number;
    celestial?: boolean;
  }>(),
  { bubbleCount: 14, seed: 1, celestial: true },
);

const ctx = useAeroTheme();
const theme = computed<AeroTheme>(() => props.theme ?? ctx.value.theme ?? "morning");
const showBubbles = computed(() => (props.bubbles !== undefined ? props.bubbles : ctx.value.bubbles !== false));
</script>

<template>
  <div class="aero-sky" :class="`theme-${theme}`" :data-screen-label="`sky-${theme}`">
    <Celestial v-if="celestial" :theme="theme" />
    <Stars v-if="theme === 'night'" :seed="seed + 5" />
    <BubbleField v-if="showBubbles" :count="bubbleCount" :seed="seed" />
    <div :style="{ position: 'relative', zIndex: 1, height: '100%', boxSizing: 'border-box' }">
      <slot />
    </div>
  </div>
</template>
