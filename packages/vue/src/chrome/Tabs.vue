<script setup lang="ts">
defineProps<{ items: string[] }>();
const model = defineModel<number>({ default: 0 });
</script>

<template>
  <div class="aero-tabs">
    <button v-for="(it, j) in items" :key="it" class="aero-tab" :data-active="model === j" @click="model = j">{{ it }}</button>
  </div>
</template>
