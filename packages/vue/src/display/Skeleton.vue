<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{ w?: number | string; h?: number | string; r?: number | string }>(),
  { w: "100%", h: 14, r: 10 },
);

const unit = (v: number | string) => (typeof v === "number" ? `${v}px` : v);
const style = computed(() => ({ width: unit(props.w), height: unit(props.h), borderRadius: unit(props.r) }));
</script>

<template>
  <div class="aero-skeleton" :style="style" />
</template>
