import type { ReactNode } from "react";

export interface TipProps {
  children?: ReactNode;
}

export function Tip({ children }: TipProps) {
  return <div className="aero-tip">{children}</div>;
}
