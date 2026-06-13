import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { AERO_THEMES, resolveAutoTheme, type AeroTheme, type AeroThemeSetting } from "./theme";

export interface AeroThemeContextValue {
  theme: AeroTheme;
  bubbles: boolean;
}

export const AeroThemeContext = createContext<AeroThemeContextValue>({
  theme: "morning",
  bubbles: true,
});

export function useAeroTheme(): AeroThemeContextValue {
  return useContext(AeroThemeContext);
}

export interface AeroThemeProviderProps {
  theme?: AeroThemeSetting;
  bubbles?: boolean;
  autoIntervalMs?: number;
  children?: ReactNode;
}

export function AeroThemeProvider({
  theme = "morning",
  bubbles = true,
  autoIntervalMs = 60_000,
  children,
}: AeroThemeProviderProps) {
  const [resolved, setResolved] = useState<AeroTheme>(() =>
    theme === "auto" ? resolveAutoTheme() : theme,
  );

  useEffect(() => {
    if (theme !== "auto") {
      setResolved(theme);
      return;
    }
    setResolved(resolveAutoTheme());
    const id = setInterval(() => setResolved(resolveAutoTheme()), autoIntervalMs);
    return () => clearInterval(id);
  }, [theme, autoIntervalMs]);

  const value = useMemo<AeroThemeContextValue>(
    () => ({ theme: AERO_THEMES.includes(resolved) ? resolved : "morning", bubbles }),
    [resolved, bubbles],
  );

  return <AeroThemeContext.Provider value={value}>{children}</AeroThemeContext.Provider>;
}
