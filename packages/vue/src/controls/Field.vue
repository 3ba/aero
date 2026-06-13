<script setup lang="ts">
defineProps<{ label?: string; hint?: string; error?: string }>();
</script>

<template>
  <label :style="{ display: 'grid', gap: '7px' }">
    <span
      v-if="label"
      class="aero-text-shadow"
      :style="{ fontSize: '12px', fontWeight: 600, color: 'var(--t-text)', letterSpacing: '0.02em' }"
      >{{ label }}</span
    >
    <slot />
    <span
      v-if="error || hint"
      class="aero-text-shadow"
      :style="{ fontSize: '11.5px', color: error ? '#fecaca' : 'var(--t-text-dim)' }"
      >{{ error || hint }}</span
    >
  </label>
</template>
