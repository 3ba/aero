<script setup lang="ts">
import Orb, { type OrbTint } from "../core/Orb.vue";
import Btn from "../controls/Button.vue";

withDefaults(defineProps<{ glyph?: string; tint?: OrbTint; title?: string; body?: string; action?: string }>(), {
  glyph: "✓",
  tint: "green",
});
const emit = defineEmits<{ action: [] }>();
</script>

<template>
  <div class="aero-toast">
    <Orb :tint="tint" :size="34" :glyph="glyph" />
    <div :style="{ flex: 1 }">
      <div :style="{ fontWeight: 700 }">{{ title }}</div>
      <div v-if="body" :style="{ opacity: 0.8, fontSize: '12px' }">{{ body }}</div>
    </div>
    <Btn v-if="action" size="sm" variant="ghost" :style="{ color: 'inherit' }" @click="emit('action')">{{ action }}</Btn>
  </div>
</template>
