<script setup lang="ts">
withDefaults(defineProps<{ placeholder?: string; kbd?: string | null }>(), {
  placeholder: "Search the sky…",
  kbd: "⌘K",
});
const model = defineModel<string>({ default: "" });
</script>

<template>
  <div class="aero-search">
    <span class="aero-search-icon">⌕</span>
    <input class="aero-input" :placeholder="placeholder" v-model="model" />
    <span v-if="kbd" class="aero-search-kbd">{{ kbd }}</span>
  </div>
</template>
