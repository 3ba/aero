import { useState } from "react";

export interface RadioGroupProps {
  options: string[];
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  row?: boolean;
}

export function RadioGroup({ options, defaultValue, value, onChange, row = false }: RadioGroupProps) {
  const [internal, setInternal] = useState(defaultValue !== undefined ? defaultValue : options[0]);
  const isControlled = value !== undefined;
  const current = isControlled ? value : internal;

  const pick = (opt: string) => {
    if (!isControlled) setInternal(opt);
    onChange?.(opt);
  };

  return (
    <div style={{ display: "flex", flexDirection: row ? "row" : "column", gap: row ? 18 : 10, flexWrap: "wrap" }}>
      {options.map((opt) => (
        <label key={opt} style={{ display: "inline-flex", alignItems: "center", gap: 10, cursor: "pointer", color: "var(--t-text)" }}>
          <div className="aero-radio" data-checked={current === opt} onClick={() => pick(opt)} />
          <span className="aero-text-shadow" style={{ fontSize: 14 }}>
            {opt}
          </span>
        </label>
      ))}
    </div>
  );
}
