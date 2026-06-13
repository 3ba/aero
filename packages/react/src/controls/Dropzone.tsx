import { useState } from "react";
import type { ReactNode } from "react";
import { Orb } from "../core/Orb";

export interface DropzoneProps {
  hint?: ReactNode;
  onFiles?: (files: FileList) => void;
}

export function Dropzone({ hint = "PNG, JPG up to 10 MB", onFiles }: DropzoneProps) {
  const [over, setOver] = useState(false);
  return (
    <div
      className="aero-dropzone"
      style={over ? { borderColor: "var(--t-accent-2)", boxShadow: "0 0 24px var(--t-glow)" } : undefined}
      onDragOver={(e) => {
        e.preventDefault();
        setOver(true);
      }}
      onDragLeave={() => setOver(false)}
      onDrop={(e) => {
        e.preventDefault();
        setOver(false);
        if (e.dataTransfer?.files?.length) onFiles?.(e.dataTransfer.files);
      }}
    >
      <Orb tint="cyan" size={46} glyph="↑" />
      <div className="aero-text-shadow" style={{ fontWeight: 600 }}>
        Drop files here or click to browse
      </div>
      <div className="aero-text-shadow" style={{ fontSize: 11.5, opacity: 0.75 }}>
        {hint}
      </div>
    </div>
  );
}
