<script setup lang="ts">
withDefaults(defineProps<{ size?: number }>(), { size: 36 });
</script>

<template>
  <div class="aero-spinner" :style="{ width: `${size}px`, height: `${size}px` }" />
</template>
