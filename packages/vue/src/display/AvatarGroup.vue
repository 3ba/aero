<script setup lang="ts">
import { computed } from "vue";
import Avatar from "./Avatar.vue";

const props = withDefaults(defineProps<{ names: string[]; size?: number; max?: number }>(), { size: 36, max: 4 });

const shown = computed(() => props.names.slice(0, props.max));
const extra = computed(() => props.names.length - shown.value.length);
const extraStyle = computed(() => ({
  width: `${props.size}px`,
  height: `${props.size}px`,
  fontSize: `${props.size * 0.32}px`,
  "--av-a": "rgba(255,255,255,0.45)",
  "--av-b": "rgba(255,255,255,0.20)",
}));
</script>

<template>
  <div class="aero-avatar-group">
    <Avatar v-for="n in shown" :key="n" :name="n" :size="size" />
    <div v-if="extra > 0" class="aero-avatar" :style="extraStyle">+{{ extra }}</div>
  </div>
</template>
