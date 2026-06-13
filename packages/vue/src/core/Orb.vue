<script setup lang="ts">
import { computed } from "vue";

export type OrbTint = "accent" | "green" | "sky" | "cyan" | "sun" | "rose" | "violet";

const props = withDefaults(
  defineProps<{
    tint?: OrbTint;
    size?: number;
    glyph?: string;
  }>(),
  { tint: "accent", size: 36 },
);

const glyphStyle = computed(() => ({
  position: "absolute" as const,
  inset: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  fontSize: `${props.size * 0.45}px`,
  fontWeight: 600,
  textShadow: "0 1px 2px rgba(0,40,80,0.5)",
  zIndex: 2,
}));
</script>

<template>
  <div class="aero-orb" :class="`aero-orb-${tint}`" :style="{ width: `${size}px`, height: `${size}px` }">
    <div v-if="glyph != null" :style="glyphStyle">{{ glyph }}</div>
  </div>
</template>
