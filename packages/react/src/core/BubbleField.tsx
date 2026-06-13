import { useMemo } from "react";
import { makeRng } from "../theme";

export interface BubbleFieldProps {
  count?: number;
  seed?: number;
}

export function BubbleField({ count = 16, seed = 1 }: BubbleFieldProps) {
  const bubbles = useMemo(() => {
    const r = makeRng(seed);
    return Array.from({ length: count }, () => ({
      size: 26 + r() * 110,
      left: r() * 100,
      top: r() * 100,
      delay: -r() * 14,
      duration: 10 + r() * 14,
    }));
  }, [count, seed]);

  return (
    <div className="aero-bubbles">
      {bubbles.map((b, i) => (
        <div
          key={i}
          className="aero-bubble"
          style={{
            width: b.size,
            height: b.size,
            left: `${b.left}%`,
            top: `${b.top}%`,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
