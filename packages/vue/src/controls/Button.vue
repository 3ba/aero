<script setup lang="ts">
import { computed } from "vue";

export type BtnVariant = "default" | "primary" | "accent2" | "positive" | "ghost" | "danger";
export type BtnSize = "sm" | "lg";

const VARIANT_CLASS: Record<BtnVariant, string> = {
  default: "",
  primary: "aero-btn-primary",
  accent2: "aero-btn-accent2",
  positive: "aero-btn-positive",
  ghost: "aero-btn-ghost",
  danger: "aero-btn-danger",
};

const props = withDefaults(
  defineProps<{
    variant?: BtnVariant;
    size?: BtnSize;
    icon?: string;
  }>(),
  { variant: "default" },
);

const cls = computed(() => [VARIANT_CLASS[props.variant], props.size ? `aero-btn-${props.size}` : ""]);
</script>

<template>
  <button class="aero-btn" :class="cls">
    <span v-if="icon" :style="{ fontSize: '1.1em', lineHeight: 0 }">{{ icon }}</span>
    <slot />
  </button>
</template>
