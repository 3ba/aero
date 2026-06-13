import type { ReactNode } from "react";
import { AeroGlobe } from "../core/AeroGlobe";
import { Btn } from "../controls/Button";

export interface NavbarProps {
  brand?: ReactNode;
  links?: string[];
  active?: number;
  actions?: ReactNode;
  onNavigate?: (index: number) => void;
}

export function Navbar({
  brand = "AERO",
  links = ["Home", "Explore", "Nature", "Sky", "Connect"],
  active = 0,
  actions,
  onNavigate,
}: NavbarProps) {
  return (
    <nav
      className="glass glass-static"
      style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 18px 10px 14px", borderRadius: 999, gap: 16 }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <AeroGlobe size={36} />
        <div className="aero-text-shadow" style={{ fontSize: 20, fontWeight: 300, letterSpacing: "0.28em" }}>
          {brand}
        </div>
      </div>
      <div style={{ display: "flex", gap: 24, fontSize: 13, fontWeight: 500 }}>
        {links.map((l, i) => (
          <a
            key={l}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate?.(i);
            }}
            className="aero-text-shadow"
            style={{
              color: "var(--t-text)",
              textDecoration: "none",
              opacity: i === active ? 1 : 0.78,
              borderBottom: i === active ? "2px solid var(--t-accent-2)" : "2px solid transparent",
              paddingBottom: 2,
            }}
          >
            {l}
          </a>
        ))}
      </div>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        {actions ?? (
          <>
            <Btn variant="ghost" size="sm">
              Sign In
            </Btn>
            <Btn variant="primary" size="sm">
              Launch
            </Btn>
          </>
        )}
      </div>
    </nav>
  );
}
