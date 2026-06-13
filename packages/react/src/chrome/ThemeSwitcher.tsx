import { AERO_THEMES, AERO_THEME_META, type AeroThemeSetting } from "../theme";

export interface ThemeSwitcherProps {
  value: AeroThemeSetting;
  onChange: (value: AeroThemeSetting) => void;
  showAuto?: boolean;
}

export function ThemeSwitcher({ value, onChange, showAuto = true }: ThemeSwitcherProps) {
  const opts: AeroThemeSetting[] = showAuto ? ["auto", ...AERO_THEMES] : [...AERO_THEMES];
  return (
    <div className="aero-tabs" style={{ padding: 4 }}>
      {opts.map((t) => (
        <button
          key={t}
          className="aero-tab"
          data-active={value === t}
          style={{ padding: "7px 13px", fontSize: 12 }}
          onClick={() => onChange(t)}
        >
          {t === "auto" ? "🕐 Auto" : `${AERO_THEME_META[t].glyph} ${AERO_THEME_META[t].label}`}
        </button>
      ))}
    </div>
  );
}
