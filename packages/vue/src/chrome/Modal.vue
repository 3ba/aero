<script setup lang="ts">
import { useSlots } from "vue";

withDefaults(defineProps<{ title?: string; w?: number }>(), { w: 380 });
const emit = defineEmits<{ close: [] }>();
const slots = useSlots();
</script>

<template>
  <div class="glass glass-strong glass-static" :style="{ width: `${w}px`, padding: '26px', borderRadius: 'var(--r-xl)', boxSizing: 'border-box' }">
    <div :style="{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }">
      <div class="aero-text-shadow" :style="{ fontSize: '20px', fontWeight: 400 }">{{ title }}</div>
      <button class="aero-btn aero-btn-icon" :style="{ width: '28px', height: '28px', fontSize: '11px' }" @click="emit('close')">✕</button>
    </div>
    <div class="aero-text-shadow" :style="{ fontSize: '13.5px', lineHeight: 1.55, opacity: 0.9 }"><slot /></div>
    <div v-if="slots.actions" :style="{ display: 'flex', gap: '10px', marginTop: '22px' }"><slot name="actions" /></div>
  </div>
</template>
