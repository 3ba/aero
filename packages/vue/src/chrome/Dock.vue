<script setup lang="ts">
export interface DockItem {
  glyph: string;
  label?: string;
}

defineProps<{ items: DockItem[] }>();
const emit = defineEmits<{ select: [index: number] }>();
</script>

<template>
  <div class="aero-dock">
    <div v-for="(it, i) in items" :key="i" class="aero-dock-item" :title="it.label" @click="emit('select', i)">{{ it.glyph }}</div>
  </div>
</template>
