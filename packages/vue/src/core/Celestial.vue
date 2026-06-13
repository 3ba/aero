<script setup lang="ts">
import { computed, type CSSProperties } from "vue";
import type { AeroTheme } from "../theme";

interface CelestialPos {
  size: number;
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  transform?: string;
  opacity?: number;
}

const CELESTIAL_POS: Record<AeroTheme, CelestialPos> = {
  sunrise: { left: "50%", bottom: "4%", size: 200, transform: "translateX(-50%)", opacity: 0.95 },
  morning: { left: "12%", top: "8%", size: 110, opacity: 0.9 },
  noon: { left: "50%", top: "-6%", size: 170, transform: "translateX(-50%)", opacity: 0.95 },
  dusk: { right: "12%", bottom: "14%", size: 150, opacity: 0.9 },
  night: { right: "10%", top: "7%", size: 90, opacity: 0.95 },
};

const props = defineProps<{ theme: AeroTheme }>();

const style = computed<CSSProperties>(() => {
  const { size, ...pos } = CELESTIAL_POS[props.theme] ?? CELESTIAL_POS.morning;
  return { width: `${size}px`, height: `${size}px`, ...pos };
});
</script>

<template>
  <div class="aero-celestial" :style="style" />
</template>
