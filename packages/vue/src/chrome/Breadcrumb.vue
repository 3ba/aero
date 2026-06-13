<script setup lang="ts">
defineProps<{ parts: string[] }>();
</script>

<template>
  <div class="aero-breadcrumb">
    <template v-for="(p, i) in parts" :key="i">
      <span v-if="i === parts.length - 1" class="aero-breadcrumb-current">{{ p }}</span>
      <a v-else href="#" @click.prevent>{{ p }}</a>
      <span v-if="i !== parts.length - 1" class="aero-breadcrumb-sep">›</span>
    </template>
  </div>
</template>
