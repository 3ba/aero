import type { ButtonHTMLAttributes, ReactNode } from "react";

export type BtnVariant = "default" | "primary" | "accent2" | "positive" | "ghost" | "danger";
export type BtnSize = "sm" | "lg";

const VARIANT_CLASS: Record<BtnVariant, string> = {
  default: "",
  primary: "aero-btn-primary",
  accent2: "aero-btn-accent2",
  positive: "aero-btn-positive",
  ghost: "aero-btn-ghost",
  danger: "aero-btn-danger",
};

export interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: BtnVariant;
  size?: BtnSize;
  icon?: ReactNode;
}

export function Btn({ variant = "default", size, icon, children, className = "", ...rest }: BtnProps) {
  const sizeCls = size ? `aero-btn-${size}` : "";
  return (
    <button className={`aero-btn ${VARIANT_CLASS[variant]} ${sizeCls} ${className}`.replace(/\s+/g, " ").trim()} {...rest}>
      {icon && <span style={{ fontSize: "1.1em", lineHeight: 0 }}>{icon}</span>}
      {children}
    </button>
  );
}

export interface IconBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: BtnVariant;
}

export function IconBtn({ variant = "default", className = "", children, ...rest }: IconBtnProps) {
  return (
    <button className={`aero-btn aero-btn-icon ${VARIANT_CLASS[variant]} ${className}`.replace(/\s+/g, " ").trim()} {...rest}>
      {children}
    </button>
  );
}

export interface FabProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Fab({ children = "＋", className = "", ...rest }: FabProps) {
  return (
    <button className={`aero-btn aero-btn-primary aero-btn-fab ${className}`.trim()} {...rest}>
      {children}
    </button>
  );
}
