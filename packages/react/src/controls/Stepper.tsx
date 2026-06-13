import { useState } from "react";

export interface StepperProps {
  defaultValue?: number;
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  suffix?: string;
  onChange?: (value: number) => void;
}

export function Stepper({ defaultValue = 1, value, min = 0, max = 99, step = 1, suffix = "", onChange }: StepperProps) {
  const [internal, setInternal] = useState(defaultValue);
  const isControlled = value !== undefined;
  const v = isControlled ? value : internal;

  const set = (next: number) => {
    const clamped = Math.max(min, Math.min(max, next));
    if (!isControlled) setInternal(clamped);
    onChange?.(clamped);
  };

  return (
    <div className="aero-stepper">
      <button onClick={() => set(v - step)} aria-label="decrement">
        −
      </button>
      <div className="aero-stepper-value">
        {v}
        {suffix}
      </div>
      <button onClick={() => set(v + step)} aria-label="increment">
        ＋
      </button>
    </div>
  );
}
