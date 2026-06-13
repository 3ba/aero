<script setup lang="ts">
defineProps<{ items: string[] }>();
const model = defineModel<number>({ default: 0 });
</script>

<template>
  <div class="aero-tabs-line">
    <button v-for="(it, j) in items" :key="it" class="aero-tab-line" :data-active="model === j" @click="model = j">{{ it }}</button>
  </div>
</template>
