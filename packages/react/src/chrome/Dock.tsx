import type { ReactNode } from "react";

export interface DockItem {
  glyph: ReactNode;
  label?: string;
  onClick?: () => void;
}

export interface DockProps {
  items: DockItem[];
}

export function Dock({ items }: DockProps) {
  return (
    <div className="aero-dock">
      {items.map((it, i) => (
        <div className="aero-dock-item" key={i} title={it.label} onClick={it.onClick}>
          {it.glyph}
        </div>
      ))}
    </div>
  );
}
