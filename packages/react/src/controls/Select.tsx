import { useEffect, useRef, useState } from "react";

export interface SelectProps {
  options: string[];
  defaultValue?: string;
  value?: string;
  placeholder?: string;
  width?: number | string;
  onChange?: (value: string) => void;
}

export function Select({ options, defaultValue, value, placeholder = "Choose…", width, onChange }: SelectProps) {
  const [open, setOpen] = useState(false);
  const [internal, setInternal] = useState<string | null>(defaultValue ?? null);
  const isControlled = value !== undefined;
  const current = isControlled ? value : internal;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const pick = (opt: string) => {
    if (!isControlled) setInternal(opt);
    onChange?.(opt);
    setOpen(false);
  };

  return (
    <div ref={ref} className="aero-select" data-open={open} style={{ width }}>
      <div className="aero-select-trigger" onClick={() => setOpen((o) => !o)}>
        <span style={{ opacity: current ? 1 : 0.6 }}>{current || placeholder}</span>
        <span className="aero-select-caret">▼</span>
      </div>
      {open && (
        <div className="aero-menu">
          {options.map((opt) => (
            <div key={opt} className="aero-menu-item" data-selected={current === opt} onClick={() => pick(opt)}>
              {current === opt && <span style={{ fontSize: 11 }}>✓</span>}
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
