<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const props = withDefaults(
  defineProps<{
    min?: number;
    max?: number;
    label?: string;
    showValue?: boolean;
    unit?: string;
  }>(),
  { min: 0, max: 100, showValue: false, unit: "" },
);

const model = defineModel<number>({ default: 60 });

const track = ref<HTMLDivElement | null>(null);
const dragging = ref(false);

function update(clientX: number) {
  const el = track.value;
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const pct = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
  model.value = Math.round(props.min + pct * (props.max - props.min));
}

function onDown(e: MouseEvent) {
  dragging.value = true;
  update(e.clientX);
}
function onTouchStart(e: TouchEvent) {
  dragging.value = true;
  const x = e.touches[0]?.clientX;
  if (x != null) update(x);
}
function onMove(e: MouseEvent | TouchEvent) {
  if (!dragging.value) return;
  const x = "touches" in e ? e.touches[0]?.clientX : e.clientX;
  if (x != null) update(x);
}
function onUp() {
  dragging.value = false;
}

onMounted(() => {
  window.addEventListener("mousemove", onMove);
  window.addEventListener("mouseup", onUp);
  window.addEventListener("touchmove", onMove);
  window.addEventListener("touchend", onUp);
});
onBeforeUnmount(() => {
  window.removeEventListener("mousemove", onMove);
  window.removeEventListener("mouseup", onUp);
  window.removeEventListener("touchmove", onMove);
  window.removeEventListener("touchend", onUp);
});

const pct = computed(() => ((model.value - props.min) / (props.max - props.min)) * 100);
</script>

<template>
  <div :style="{ display: 'grid', gap: '6px' }">
    <div
      v-if="label || showValue"
      :style="{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--t-text)' }"
    >
      <span v-if="label" class="aero-text-shadow" :style="{ opacity: 0.85 }">{{ label }}</span>
      <span v-if="showValue" class="aero-text-shadow" :style="{ fontWeight: 700 }">{{ model }}{{ unit }}</span>
    </div>
    <div ref="track" class="aero-slider" @mousedown="onDown" @touchstart="onTouchStart">
      <div class="aero-slider-track"><div class="aero-slider-fill" :style="{ width: `${pct}%` }" /></div>
      <div class="aero-slider-thumb" :style="{ left: `${pct}%` }" />
    </div>
  </div>
</template>
