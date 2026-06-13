<script setup lang="ts">
defineProps<{ label?: string }>();
</script>

<template>
  <div :style="{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px', gap: '12px' }">
    <span class="aero-text-shadow" :style="{ opacity: 0.9 }">
      <slot name="label">{{ label }}</slot>
    </span>
    <slot />
  </div>
</template>
