<script setup lang="ts">
import { ref } from "vue";

withDefaults(defineProps<{ placeholder?: string }>(), { placeholder: "Add tag…" });
const model = defineModel<string[]>({ default: () => [] });

const draft = ref("");

function add() {
  const t = draft.value.trim();
  if (t && !model.value.includes(t)) model.value = [...model.value, t];
  draft.value = "";
}
function remove(tag: string) {
  model.value = model.value.filter((x) => x !== tag);
}
</script>

<template>
  <div :style="{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }">
    <span v-for="t in model" :key="t" class="aero-tag">
      {{ t }}
      <button class="aero-tag-x" @click="remove(t)">✕</button>
    </span>
    <input
      class="aero-input"
      :style="{ width: '110px', padding: '6px 12px', fontSize: '12px' }"
      :placeholder="placeholder"
      v-model="draft"
      @keydown.enter="add"
    />
  </div>
</template>
