<script setup lang="ts">
import Orb from "../core/Orb.vue";

withDefaults(defineProps<{ label?: string; value?: string | number; delta?: string; up?: boolean; glyph?: string }>(), {
  up: true,
});
</script>

<template>
  <div class="glass glass-lift" :style="{ padding: '18px 20px', display: 'flex', gap: '14px', alignItems: 'center' }">
    <Orb v-if="glyph != null" tint="accent" :size="44" :glyph="glyph" />
    <div :style="{ display: 'grid', gap: '3px' }">
      <div
        class="aero-text-shadow"
        :style="{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.8 }"
      >
        {{ label }}
      </div>
      <div :style="{ display: 'flex', alignItems: 'baseline', gap: '9px' }">
        <span class="aero-text-shadow" :style="{ fontSize: '28px', fontWeight: 300, lineHeight: 1 }">{{ value }}</span>
        <span
          v-if="delta"
          class="aero-text-shadow"
          :style="{ fontSize: '12px', fontWeight: 700, color: up ? 'color-mix(in oklab, var(--t-positive), white 35%)' : '#fda4af' }"
        >
          {{ up ? "▲" : "▼" }} {{ delta }}
        </span>
      </div>
    </div>
  </div>
</template>
