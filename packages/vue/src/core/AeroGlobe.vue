<script setup lang="ts">
withDefaults(defineProps<{ size?: number }>(), { size: 64 });
</script>

<template>
  <div
    :style="{
      width: `${size}px`,
      height: `${size}px`,
      position: 'relative',
      flexShrink: 0,
      borderRadius: '50%',
      background:
        'radial-gradient(circle at 30% 25%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.15) 30%, transparent 55%),' +
        'radial-gradient(circle at 60% 70%, #22c55e 0%, #16a34a 30%, transparent 55%),' +
        'radial-gradient(circle at 50% 50%, #38bdf8 0%, #0284c7 80%)',
      boxShadow:
        'inset 0 -10px 22px rgba(0,30,60,0.45), inset 0 0 16px rgba(255,255,255,0.35), 0 10px 26px var(--t-shadow)',
      border: '1px solid rgba(255,255,255,0.6)',
    }"
  >
    <div :style="{ position: 'absolute', inset: '12%', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.35)', transform: 'rotate(20deg)' }" />
    <div :style="{ position: 'absolute', inset: '20% 6%', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.25)', transform: 'rotate(-15deg)' }" />
    <div
      :style="{
        position: 'absolute',
        top: '8%',
        left: '18%',
        width: '40%',
        height: '26%',
        borderRadius: '50%',
        background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.95), transparent 70%)',
        filter: 'blur(0.5px)',
      }"
    />
  </div>
</template>
