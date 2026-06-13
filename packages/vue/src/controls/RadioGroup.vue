<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(defineProps<{ options: string[]; row?: boolean }>(), { row: false });
const model = defineModel<string>();

const current = computed(() => model.value ?? props.options[0]);
</script>

<template>
  <div :style="{ display: 'flex', flexDirection: row ? 'row' : 'column', gap: row ? '18px' : '10px', flexWrap: 'wrap' }">
    <label
      v-for="opt in options"
      :key="opt"
      :style="{ display: 'inline-flex', alignItems: 'center', gap: '10px', cursor: 'pointer', color: 'var(--t-text)' }"
    >
      <div class="aero-radio" :data-checked="current === opt" @click="model = opt" />
      <span class="aero-text-shadow" :style="{ fontSize: '14px' }">{{ opt }}</span>
    </label>
  </div>
</template>
