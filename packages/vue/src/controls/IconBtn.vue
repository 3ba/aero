<script setup lang="ts">
import { computed } from "vue";
import type { BtnVariant } from "./Button.vue";

const VARIANT_CLASS: Record<BtnVariant, string> = {
  default: "",
  primary: "aero-btn-primary",
  accent2: "aero-btn-accent2",
  positive: "aero-btn-positive",
  ghost: "aero-btn-ghost",
  danger: "aero-btn-danger",
};

const props = withDefaults(defineProps<{ variant?: BtnVariant }>(), { variant: "default" });
const cls = computed(() => VARIANT_CLASS[props.variant]);
</script>

<template>
  <button class="aero-btn aero-btn-icon" :class="cls"><slot /></button>
</template>
