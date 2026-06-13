import { useState } from "react";
import type { ReactNode } from "react";

export interface ToggleProps {
  label?: ReactNode;
  defaultOn?: boolean;
  on?: boolean;
  onChange?: (on: boolean) => void;
  disabled?: boolean;
}

export function Toggle({ label, defaultOn = false, on, onChange, disabled }: ToggleProps) {
  const [internal, setInternal] = useState(defaultOn);
  const isControlled = on !== undefined;
  const value = isControlled ? on : internal;

  const flip = () => {
    if (disabled) return;
    const next = !value;
    if (!isControlled) setInternal(next);
    onChange?.(next);
  };

  return (
    <label
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        color: "var(--t-text)",
      }}
    >
      <div className="aero-toggle" data-on={value} onClick={flip} />
      {label != null && (
        <span className="aero-text-shadow" style={{ fontSize: 14 }}>
          {label}
        </span>
      )}
    </label>
  );
}
