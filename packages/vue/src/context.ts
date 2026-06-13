import { computed, inject, type ComputedRef, type InjectionKey } from "vue";
import type { AeroTheme } from "./theme";

export interface AeroThemeContextValue {
  theme: AeroTheme;
  bubbles: boolean;
}

export const AeroThemeKey: InjectionKey<ComputedRef<AeroThemeContextValue>> = Symbol("aero-theme");

const DEFAULT: AeroThemeContextValue = { theme: "morning", bubbles: true };

export function useAeroTheme(): ComputedRef<AeroThemeContextValue> {
  return inject(AeroThemeKey, computed(() => DEFAULT));
}
