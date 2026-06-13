import { useState } from "react";
import type { ReactNode } from "react";

export interface CheckProps {
  label?: ReactNode;
  defaultChecked?: boolean;
  checked?: boolean;
  indeterminate?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

export function Check({ label, defaultChecked = false, checked, indeterminate = false, onChange, disabled }: CheckProps) {
  const [internal, setInternal] = useState(defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;

  const toggle = () => {
    if (disabled) return;
    const next = !on;
    if (!isControlled) setInternal(next);
    onChange?.(next);
  };

  return (
    <label
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        color: "var(--t-text)",
      }}
    >
      <div className="aero-check" data-checked={on} data-indeterminate={!on && indeterminate} onClick={toggle} />
      {label != null && (
        <span className="aero-text-shadow" style={{ fontSize: 14 }}>
          {label}
        </span>
      )}
    </label>
  );
}
