<script setup lang="ts">
const props = withDefaults(
  defineProps<{ min?: number; max?: number; step?: number; suffix?: string }>(),
  { min: 0, max: 99, step: 1, suffix: "" },
);
const model = defineModel<number>({ default: 1 });

function set(next: number) {
  model.value = Math.max(props.min, Math.min(props.max, next));
}
</script>

<template>
  <div class="aero-stepper">
    <button @click="set(model - step)" aria-label="decrement">−</button>
    <div class="aero-stepper-value">{{ model }}{{ suffix }}</div>
    <button @click="set(model + step)" aria-label="increment">＋</button>
  </div>
</template>
