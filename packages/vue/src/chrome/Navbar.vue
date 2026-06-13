<script setup lang="ts">
import AeroGlobe from "../core/AeroGlobe.vue";
import Btn from "../controls/Button.vue";

withDefaults(
  defineProps<{ brand?: string; links?: string[]; active?: number }>(),
  { brand: "AERO", links: () => ["Home", "Explore", "Nature", "Sky", "Connect"], active: 0 },
);
const emit = defineEmits<{ navigate: [index: number] }>();
</script>

<template>
  <nav
    class="glass glass-static"
    :style="{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 18px 10px 14px', borderRadius: '999px', gap: '16px' }"
  >
    <div :style="{ display: 'flex', alignItems: 'center', gap: '12px' }">
      <AeroGlobe :size="36" />
      <div class="aero-text-shadow" :style="{ fontSize: '20px', fontWeight: 300, letterSpacing: '0.28em' }">{{ brand }}</div>
    </div>
    <div :style="{ display: 'flex', gap: '24px', fontSize: '13px', fontWeight: 500 }">
      <a
        v-for="(l, i) in links"
        :key="l"
        href="#"
        class="aero-text-shadow"
        :style="{
          color: 'var(--t-text)',
          textDecoration: 'none',
          opacity: i === active ? 1 : 0.78,
          borderBottom: i === active ? '2px solid var(--t-accent-2)' : '2px solid transparent',
          paddingBottom: '2px',
        }"
        @click.prevent="emit('navigate', i)"
        >{{ l }}</a
      >
    </div>
    <div :style="{ display: 'flex', gap: '8px', alignItems: 'center' }">
      <slot name="actions">
        <Btn variant="ghost" size="sm">Sign In</Btn>
        <Btn variant="primary" size="sm">Launch</Btn>
      </slot>
    </div>
  </nav>
</template>
