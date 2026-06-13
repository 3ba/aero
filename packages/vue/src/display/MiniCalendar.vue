<script setup lang="ts">
const props = withDefaults(
  defineProps<{ month?: string; activeDay?: number; startOffset?: number; days?: number }>(),
  { month: "June 2026", activeDay: 10, startOffset: 0, days: 30 },
);

const weekdays = ["S", "M", "T", "W", "T", "F", "S"];

function dayStyle(d: number) {
  const active = d === props.activeDay;
  return {
    padding: "5px 0",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: active ? 700 : 500,
    background: active
      ? "linear-gradient(180deg, color-mix(in oklab, var(--t-accent), white 40%), var(--t-accent))"
      : "transparent",
    boxShadow: active ? "0 2px 8px var(--t-glow), inset 0 1px 0 rgba(255,255,255,0.7)" : "none",
  };
}
</script>

<template>
  <div class="glass glass-static" :style="{ padding: '18px', width: '252px', boxSizing: 'border-box' }">
    <div :style="{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }">
      <span class="aero-text-shadow" :style="{ fontWeight: 600, fontSize: '14px' }">{{ month }}</span>
      <div :style="{ display: 'flex', gap: '6px' }">
        <button class="aero-btn aero-btn-icon" :style="{ width: '26px', height: '26px', fontSize: '11px' }">◀</button>
        <button class="aero-btn aero-btn-icon" :style="{ width: '26px', height: '26px', fontSize: '11px' }">▶</button>
      </div>
    </div>
    <div :style="{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '3px', fontSize: '11px', textAlign: 'center' }">
      <div v-for="(d, i) in weekdays" :key="`w${i}`" class="aero-text-shadow" :style="{ opacity: 0.65, fontWeight: 700, padding: '4px 0' }">
        {{ d }}
      </div>
      <div v-for="i in startOffset" :key="`b${i}`" />
      <div v-for="d in days" :key="d" class="aero-text-shadow" :style="dayStyle(d)">{{ d }}</div>
    </div>
  </div>
</template>
