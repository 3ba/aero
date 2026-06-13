import { useState } from "react";
import type { ReactNode } from "react";

export interface AccordionItem {
  title: ReactNode;
  body: ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  defaultOpen?: number;
}

export function Accordion({ items, defaultOpen = 0 }: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="aero-accordion">
      {items.map((it, i) => (
        <div key={i} className="aero-acc-item" data-open={open === i}>
          <div className="aero-acc-head" onClick={() => setOpen((o) => (o === i ? -1 : i))}>
            <span>{it.title}</span>
            <span className="aero-acc-caret">▼</span>
          </div>
          {open === i && <div className="aero-acc-body">{it.body}</div>}
        </div>
      ))}
    </div>
  );
}
