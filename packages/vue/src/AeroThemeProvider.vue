<script setup lang="ts">
import { computed, onBeforeUnmount, provide, ref, watch } from "vue";
import { AeroThemeKey, type AeroThemeContextValue } from "./context";
import { AERO_THEMES, resolveAutoTheme, type AeroTheme, type AeroThemeSetting } from "./theme";

const props = withDefaults(
  defineProps<{
    theme?: AeroThemeSetting;
    bubbles?: boolean;
    autoIntervalMs?: number;
  }>(),
  { theme: "morning", bubbles: true, autoIntervalMs: 60_000 },
);

const resolved = ref<AeroTheme>(props.theme === "auto" ? resolveAutoTheme() : props.theme);
let timer: ReturnType<typeof setInterval> | undefined;

function stop() {
  if (timer) clearInterval(timer);
  timer = undefined;
}

watch(
  () => [props.theme, props.autoIntervalMs] as const,
  ([theme, interval]) => {
    stop();
    if (theme === "auto") {
      resolved.value = resolveAutoTheme();
      timer = setInterval(() => (resolved.value = resolveAutoTheme()), interval);
    } else {
      resolved.value = theme;
    }
  },
  { immediate: true },
);

onBeforeUnmount(stop);

const context = computed<AeroThemeContextValue>(() => ({
  theme: AERO_THEMES.includes(resolved.value) ? resolved.value : "morning",
  bubbles: props.bubbles,
}));

provide(AeroThemeKey, context);
</script>

<template>
  <slot />
</template>
