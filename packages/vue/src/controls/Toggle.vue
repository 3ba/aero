<script setup lang="ts">
const props = defineProps<{ label?: string; disabled?: boolean }>();
const model = defineModel<boolean>({ default: false });

function flip() {
  if (props.disabled) return;
  model.value = !model.value;
}
</script>

<template>
  <label
    :style="{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      color: 'var(--t-text)',
    }"
  >
    <div class="aero-toggle" :data-on="model" @click="flip" />
    <span v-if="label" class="aero-text-shadow" :style="{ fontSize: '14px' }">{{ label }}</span>
  </label>
</template>
