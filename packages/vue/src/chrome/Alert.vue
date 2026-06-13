<script setup lang="ts">
import { computed } from "vue";

export type AlertTone = "info" | "success" | "warn" | "danger";

const ICON: Record<AlertTone, string> = { info: "i", success: "✓", warn: "!", danger: "✕" };

const props = withDefaults(defineProps<{ tone?: AlertTone; title?: string }>(), { tone: "info" });
const icon = computed(() => ICON[props.tone]);
</script>

<template>
  <div class="aero-alert" :class="`aero-alert-${tone}`">
    <div class="aero-alert-icon">{{ icon }}</div>
    <div>
      <div v-if="title" :style="{ fontWeight: 700, marginBottom: '2px' }">{{ title }}</div>
      <div :style="{ opacity: 0.9 }"><slot /></div>
    </div>
  </div>
</template>
