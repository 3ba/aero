<script setup lang="ts">
import { computed } from "vue";
import { AERO_THEMES, AERO_THEME_META, type AeroThemeSetting } from "../theme";

const props = withDefaults(defineProps<{ showAuto?: boolean }>(), { showAuto: true });
const model = defineModel<AeroThemeSetting>({ default: "morning" });

const opts = computed<AeroThemeSetting[]>(() => (props.showAuto ? ["auto", ...AERO_THEMES] : [...AERO_THEMES]));

function labelOf(t: AeroThemeSetting) {
  return t === "auto" ? "🕐 Auto" : `${AERO_THEME_META[t].glyph} ${AERO_THEME_META[t].label}`;
}
</script>

<template>
  <div class="aero-tabs" :style="{ padding: '4px' }">
    <button
      v-for="t in opts"
      :key="t"
      class="aero-tab"
      :data-active="model === t"
      :style="{ padding: '7px 13px', fontSize: '12px' }"
      @click="model = t"
    >
      {{ labelOf(t) }}
    </button>
  </div>
</template>
