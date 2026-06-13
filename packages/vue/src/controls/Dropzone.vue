<script setup lang="ts">
import { ref } from "vue";
import Orb from "../core/Orb.vue";

withDefaults(defineProps<{ hint?: string }>(), { hint: "PNG, JPG up to 10 MB" });
const emit = defineEmits<{ files: [files: FileList] }>();

const over = ref(false);

function onDrop(e: DragEvent) {
  over.value = false;
  if (e.dataTransfer?.files?.length) emit("files", e.dataTransfer.files);
}
</script>

<template>
  <div
    class="aero-dropzone"
    :style="over ? { borderColor: 'var(--t-accent-2)', boxShadow: '0 0 24px var(--t-glow)' } : undefined"
    @dragover.prevent="over = true"
    @dragleave="over = false"
    @drop.prevent="onDrop"
  >
    <Orb tint="cyan" :size="46" glyph="↑" />
    <div class="aero-text-shadow" :style="{ fontWeight: 600 }">Drop files here or click to browse</div>
    <div class="aero-text-shadow" :style="{ fontSize: '11.5px', opacity: 0.75 }">{{ hint }}</div>
  </div>
</template>
