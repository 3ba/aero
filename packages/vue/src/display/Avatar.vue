<script setup lang="ts">
import { computed } from "vue";
import { AVATAR_PALETTES, initialsOf, paletteIndexOf } from "./palettes";

const props = withDefaults(
  defineProps<{ name?: string; size?: number; status?: boolean; paletteIndex?: number }>(),
  { name: "??", size: 40, status: false },
);

const initials = computed(() => initialsOf(props.name));
const palette = computed(() => AVATAR_PALETTES[props.paletteIndex ?? paletteIndexOf(props.name)]);
const style = computed(() => ({
  width: `${props.size}px`,
  height: `${props.size}px`,
  fontSize: `${props.size * 0.36}px`,
  "--av-a": palette.value[0],
  "--av-b": palette.value[1],
}));
</script>

<template>
  <div class="aero-avatar" :style="style">
    {{ initials }}
    <div v-if="status" class="aero-avatar-status" />
  </div>
</template>
