<script setup lang="ts">
import { computed, type CSSProperties } from "vue";

const props = withDefaults(
  defineProps<{
    gap?: number | string;
    row?: boolean;
    wrap?: boolean;
    align?: CSSProperties["alignItems"];
    justify?: CSSProperties["justifyContent"];
  }>(),
  { gap: 12, row: false, wrap: false },
);

const style = computed<CSSProperties>(() => ({
  display: "flex",
  flexDirection: props.row ? "row" : "column",
  flexWrap: props.wrap ? "wrap" : "nowrap",
  gap: typeof props.gap === "number" ? `${props.gap}px` : props.gap,
  alignItems: props.align,
  justifyContent: props.justify,
}));
</script>

<template>
  <div :style="style"><slot /></div>
</template>
