<script setup lang="ts">
defineProps<{ invalid?: boolean }>();
const model = defineModel<string>({ default: "" });
</script>

<template>
  <input class="aero-input" :class="{ 'aero-input-invalid': invalid }" v-model="model" />
</template>
