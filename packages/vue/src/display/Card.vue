<script setup lang="ts">
import { useSlots } from "vue";

withDefaults(defineProps<{ title?: string; subtitle?: string; lift?: boolean }>(), { lift: true });
const slots = useSlots();
</script>

<template>
  <div class="glass" :class="{ 'glass-lift': lift }" :style="{ padding: '24px' }">
    <div v-if="title" :style="{ marginBottom: '12px' }">
      <div class="aero-text-shadow" :style="{ fontSize: '21px', fontWeight: 300, letterSpacing: '0.02em' }">{{ title }}</div>
      <div v-if="subtitle" class="aero-text-shadow" :style="{ fontSize: '12.5px', opacity: 0.75, marginTop: '3px' }">{{ subtitle }}</div>
    </div>
    <div class="aero-text-shadow" :style="{ fontSize: '14px', lineHeight: 1.55, opacity: 0.94 }"><slot /></div>
    <div v-if="slots.footer" :style="{ marginTop: '18px' }"><slot name="footer" /></div>
  </div>
</template>
