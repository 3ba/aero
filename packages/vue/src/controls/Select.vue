<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

withDefaults(defineProps<{ options: string[]; placeholder?: string; width?: number | string }>(), {
  placeholder: "Choose…",
});
const model = defineModel<string>();

const open = ref(false);
const root = ref<HTMLDivElement | null>(null);

function pick(opt: string) {
  model.value = opt;
  open.value = false;
}
function onDocClick(e: MouseEvent) {
  if (root.value && !root.value.contains(e.target as Node)) open.value = false;
}

onMounted(() => document.addEventListener("mousedown", onDocClick));
onBeforeUnmount(() => document.removeEventListener("mousedown", onDocClick));
</script>

<template>
  <div ref="root" class="aero-select" :data-open="open" :style="{ width: typeof width === 'number' ? `${width}px` : width }">
    <div class="aero-select-trigger" @click="open = !open">
      <span :style="{ opacity: model ? 1 : 0.6 }">{{ model || placeholder }}</span>
      <span class="aero-select-caret">▼</span>
    </div>
    <div v-if="open" class="aero-menu">
      <div
        v-for="opt in options"
        :key="opt"
        class="aero-menu-item"
        :data-selected="model === opt"
        @click="pick(opt)"
      >
        <span v-if="model === opt" :style="{ fontSize: '11px' }">✓</span>
        {{ opt }}
      </div>
    </div>
  </div>
</template>
