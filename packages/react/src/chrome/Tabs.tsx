import { useState } from "react";

export interface TabsProps {
  items: string[];
  defaultIndex?: number;
  index?: number;
  onChange?: (index: number) => void;
}

export function Tabs({ items, defaultIndex = 0, index, onChange }: TabsProps) {
  const [internal, setInternal] = useState(defaultIndex);
  const isControlled = index !== undefined;
  const active = isControlled ? index : internal;

  const pick = (j: number) => {
    if (!isControlled) setInternal(j);
    onChange?.(j);
  };

  return (
    <div className="aero-tabs">
      {items.map((it, j) => (
        <button key={it} className="aero-tab" data-active={active === j} onClick={() => pick(j)}>
          {it}
        </button>
      ))}
    </div>
  );
}

export interface LineTabsProps {
  items: string[];
  defaultIndex?: number;
  index?: number;
  onChange?: (index: number) => void;
}

export function LineTabs({ items, defaultIndex = 0, index, onChange }: LineTabsProps) {
  const [internal, setInternal] = useState(defaultIndex);
  const isControlled = index !== undefined;
  const active = isControlled ? index : internal;

  const pick = (j: number) => {
    if (!isControlled) setInternal(j);
    onChange?.(j);
  };

  return (
    <div className="aero-tabs-line">
      {items.map((it, j) => (
        <button key={it} className="aero-tab-line" data-active={active === j} onClick={() => pick(j)}>
          {it}
        </button>
      ))}
    </div>
  );
}
