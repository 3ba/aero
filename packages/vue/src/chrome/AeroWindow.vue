<script setup lang="ts">
import { useSlots } from "vue";

withDefaults(defineProps<{ title?: string; w?: number }>(), { title: "Untitled", w: 480 });
const slots = useSlots();
const lights = ["#ef4444", "#f59e0b", "#22c55e"];
</script>

<template>
  <div class="glass glass-static" :style="{ width: `${w}px`, borderRadius: '16px', overflow: 'hidden', padding: '0' }">
    <div
      :style="{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '10px 14px',
        borderBottom: '1px solid var(--t-glass-border)',
        background: 'linear-gradient(180deg, rgba(255,255,255,0.50), rgba(255,255,255,0.12))',
      }"
    >
      <div :style="{ display: 'flex', gap: '6px' }">
        <div
          v-for="(c, i) in lights"
          :key="i"
          :style="{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: `radial-gradient(circle at 30% 30%, white, ${c} 70%)`,
            border: '1px solid rgba(255,255,255,0.6)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.9), 0 1px 2px rgba(0,40,80,0.3)',
          }"
        />
      </div>
      <div class="aero-ink" :style="{ flex: 1, textAlign: 'center', fontSize: '13px', fontWeight: 600 }">{{ title }}</div>
      <div :style="{ width: '42px' }" />
    </div>
    <div
      v-if="slots.toolbar"
      :style="{ display: 'flex', gap: '8px', padding: '8px 14px', borderBottom: '1px solid var(--t-glass-border)', background: 'rgba(255,255,255,0.08)' }"
    >
      <slot name="toolbar" />
    </div>
    <div :style="{ padding: '18px' }"><slot /></div>
  </div>
</template>
