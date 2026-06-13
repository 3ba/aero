import { useState } from "react";

export interface RatingProps {
  defaultValue?: number;
  value?: number;
  max?: number;
  onChange?: (value: number) => void;
}

export function Rating({ defaultValue = 3, value, max = 5, onChange }: RatingProps) {
  const [internal, setInternal] = useState(defaultValue);
  const [hover, setHover] = useState(0);
  const isControlled = value !== undefined;
  const v = isControlled ? value : internal;

  const pick = (next: number) => {
    if (!isControlled) setInternal(next);
    onChange?.(next);
  };

  return (
    <div className="aero-rating" onMouseLeave={() => setHover(0)}>
      {Array.from({ length: max }, (_, i) => (
        <span
          key={i}
          className="aero-rating-star"
          data-on={(hover || v) > i}
          onMouseEnter={() => setHover(i + 1)}
          onClick={() => pick(i + 1)}
        >
          ★
        </span>
      ))}
    </div>
  );
}
