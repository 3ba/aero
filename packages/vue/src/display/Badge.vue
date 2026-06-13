<script setup lang="ts">
import { computed } from "vue";

export type BadgeTone = "default" | "accent" | "positive" | "warn" | "danger";

const TONE_CLASS: Record<BadgeTone, string> = {
  default: "",
  accent: "aero-badge-accent",
  positive: "aero-badge-positive",
  warn: "aero-badge-warn",
  danger: "aero-badge-danger",
};

const props = withDefaults(defineProps<{ tone?: BadgeTone; dot?: boolean }>(), { tone: "default", dot: false });
const cls = computed(() => TONE_CLASS[props.tone]);
</script>

<template>
  <span class="aero-badge" :class="cls">
    <span v-if="dot" class="aero-badge-dot" />
    <slot />
  </span>
</template>
