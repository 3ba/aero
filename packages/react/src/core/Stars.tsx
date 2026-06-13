import { useMemo } from "react";
import { makeRng } from "../theme";

export interface StarsProps {
  count?: number;
  seed?: number;
}

export function Stars({ count = 40, seed = 7 }: StarsProps) {
  const stars = useMemo(() => {
    const r = makeRng(seed);
    return Array.from({ length: count }, () => ({
      left: r() * 100,
      top: r() * 60,
      size: 1 + r() * 2.4,
      delay: -r() * 3.5,
    }));
  }, [count, seed]);

  return (
    <div className="aero-stars">
      {stars.map((s, i) => (
        <div
          key={i}
          className="aero-star"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
