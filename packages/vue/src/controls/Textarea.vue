<script setup lang="ts">
const model = defineModel<string>({ default: "" });
</script>

<template>
  <textarea class="aero-textarea" v-model="model" />
</template>
