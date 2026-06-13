<script setup lang="ts">
const props = defineProps<{ label?: string; indeterminate?: boolean; disabled?: boolean }>();
const model = defineModel<boolean>({ default: false });

function toggle() {
  if (props.disabled) return;
  model.value = !model.value;
}
</script>

<template>
  <label
    :style="{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      color: 'var(--t-text)',
    }"
  >
    <div class="aero-check" :data-checked="model" :data-indeterminate="!model && !!indeterminate" @click="toggle" />
    <span v-if="label" class="aero-text-shadow" :style="{ fontSize: '14px' }">{{ label }}</span>
  </label>
</template>
