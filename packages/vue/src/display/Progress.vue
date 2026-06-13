<script setup lang="ts">
withDefaults(defineProps<{ value?: number; label?: string }>(), { value: 60 });
</script>

<template>
  <div :style="{ display: 'grid', gap: '6px' }">
    <div v-if="label" :style="{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--t-text)' }">
      <span class="aero-text-shadow" :style="{ opacity: 0.85 }">{{ label }}</span>
      <span class="aero-text-shadow" :style="{ fontWeight: 700 }">{{ value }}%</span>
    </div>
    <div class="aero-progress"><div class="aero-progress-fill" :style="{ width: `${value}%` }" /></div>
  </div>
</template>
