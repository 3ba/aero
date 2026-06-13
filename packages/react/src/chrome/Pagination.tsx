import { useState } from "react";

export interface PaginationProps {
  pages?: number;
  defaultPage?: number;
  page?: number;
  onChange?: (page: number) => void;
}

export function Pagination({ pages = 6, defaultPage = 1, page, onChange }: PaginationProps) {
  const [internal, setInternal] = useState(defaultPage);
  const isControlled = page !== undefined;
  const current = isControlled ? page : internal;

  const go = (p: number) => {
    const clamped = Math.max(1, Math.min(pages, p));
    if (!isControlled) setInternal(clamped);
    onChange?.(clamped);
  };

  return (
    <div className="aero-pagination">
      <button className="aero-page" onClick={() => go(current - 1)}>
        ‹
      </button>
      {Array.from({ length: pages }, (_, i) => (
        <button key={i} className="aero-page" data-active={current === i + 1} onClick={() => go(i + 1)}>
          {i + 1}
        </button>
      ))}
      <button className="aero-page" onClick={() => go(current + 1)}>
        ›
      </button>
    </div>
  );
}
