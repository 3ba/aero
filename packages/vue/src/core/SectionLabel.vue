<script setup lang="ts">
</script>

<template>
  <div
    class="aero-text-shadow"
    :style="{
      fontSize: '11px',
      fontWeight: 700,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--t-text)',
      opacity: 0.85,
    }"
  >
    <slot />
  </div>
</template>
