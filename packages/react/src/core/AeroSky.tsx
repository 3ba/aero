import type { CSSProperties, ReactNode } from "react";
import { useAeroTheme } from "../AeroThemeProvider";
import type { AeroTheme } from "../theme";
import { Celestial } from "./Celestial";
import { Stars } from "./Stars";
import { BubbleField } from "./BubbleField";

export interface AeroSkyProps {
  theme?: AeroTheme;
  bubbles?: boolean;
  bubbleCount?: number;
  seed?: number;
  celestial?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export function AeroSky({
  theme,
  bubbles,
  bubbleCount = 14,
  seed = 1,
  celestial = true,
  className = "",
  style,
  children,
}: AeroSkyProps) {
  const ctx = useAeroTheme();
  const t = theme ?? ctx.theme ?? "morning";
  const showBubbles = bubbles !== undefined ? bubbles : ctx.bubbles !== false;

  return (
    <div className={`aero-sky theme-${t} ${className}`.trim()} style={style} data-screen-label={`sky-${t}`}>
      {celestial && <Celestial theme={t} />}
      {t === "night" && <Stars seed={seed + 5} />}
      {showBubbles && <BubbleField count={bubbleCount} seed={seed} />}
      <div style={{ position: "relative", zIndex: 1, height: "100%", boxSizing: "border-box" }}>{children}</div>
    </div>
  );
}
